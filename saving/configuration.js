
var exportedConfig = require('../db');
const { config, savedData } = exportedConfig;
const shortid = require('shortid');

class Configuration {
    deleteRoute(req, res) {
        try {
            var configItems = config.getData("/routes");
            
            const filteredRoutes = configItems.filter(item => {
                return item.groupId !== req.query.groupId
            });

            const dataToRemove = configItems.filter(item => {
                return item.groupId == req.query.groupId
            });

            savedData.delete(`post${dataToRemove[0].route}`)
            config.push("/routes", filteredRoutes);
            
            res.send({message: 'The route has been deleted'})

        } catch (e) {
            res.sendStatus(404)
        }
    }
    createAdditionalMethods(req, groupId) {

        config.push("/routes", [{
            route: req.body.route,
            method: "GET",
            groupId: groupId,
        }], false);

        config.push("/routes", [{
            ...req.body,
            method: "PUT",
            groupId: groupId,
        }], false);

        function deleteParams() {
            if (req.body.itemType == 'collection') {
                return {
                    method: "DELETE",
                    route: req.body.route,
                    groupId: groupId,
                    deleteByParam: 'id'
                }
            }
            return {
                route: req.body.route,
                method: "DELETE",
                groupId: groupId,
            }
        }

        config.push("/routes", [{
            ...deleteParams()
        }], false);
    }

    saveRoute(req, res) {
        try {
            var configItems = config.getData("/routes");

            if (configItems) {
                const isExist = configItems.filter(item => {
                    return item.route == req.body.route
                })

                if (isExist.length) {
                    res.sendStatus(409)
                } else {
                    const groupId = shortid.generate();
                    config.push("/routes", [{
                        ...req.body,
                        method: "POST",
                        groupId: groupId,
                    }], false);

                    this.createAdditionalMethods(req, groupId);

                    res.send({ message: 'Updated' })
                }
            }

        } catch (e) {
            const groupId = shortid.generate();
            config.push("/routes[0]", { ...req.body, method: "POST", groupId: groupId }, true);
            this.createAdditionalMethods(req, groupId)
            res.send({ message: 'Created' })
        }
    }
}

module.exports.Configuration = new Configuration;