var exportedConfig = require('../db');
const { config, savedData } = exportedConfig;
const shortid = require('shortid');

class Data {
    save(req, res) {

        try {
            const routes = config.getData("/routes");

            const filteredRoutes = routes.filter(item => {
                return item.route == req.path && item.method == req.method
            });

            if (filteredRoutes.length) {

                switch (req.method) {
                    case "PUT":
                    case "POST": {
                        try {

                            const data = savedData.getData(`post${req.path}`);

                            if (filteredRoutes[0].itemType == 'collection' && !filteredRoutes[0].changeByParam) {

                                savedData.push(`post${req.path}`, [{ ...req.body, id: shortid.generate() }], false);
                                const newData = savedData.getData(`post${req.path}`);
                                res.send(newData);

                            } else if (filteredRoutes[0].itemType == 'collection' && filteredRoutes[0].changeByParam) {

                                const ifExist = data.findIndex(item => item.id == req.body.id);

                                if (~ifExist) {

                                    savedData.push(`post${req.path}[${ifExist}]`, req.body);
                                    const newData = savedData.getData(`post${req.path}`);
                                    res.send(newData);

                                } else {

                                    savedData.push(`post${req.path}`, [{ ...req.body, id: shortid.generate() }], false);
                                    const newData = savedData.getData(`post${req.path}`);
                                    res.send(newData);

                                }

                            } else if (filteredRoutes[0].itemType == 'single') {

                                savedData.push(`post${req.path}`, { ...req.body, id: shortid.generate() });
                                const newData = savedData.getData(`post${req.path}`);
                                res.send(newData);

                            }
                        } catch (e) {

                            if (filteredRoutes[0].itemType == 'collection') {

                                savedData.push(`post${req.path}[0]`, { ...req.body, id: shortid.generate() }, true);
                                res.send(savedData.getData(`post${req.path}`));

                            } else if (filteredRoutes[0].itemType == 'single') {

                                savedData.push(`post${req.path}`, { ...req.body, id: shortid.generate() }, true);
                                res.send(savedData.getData(`post${req.path}`));

                            }
                        }
                    }
                        break;

                    case "GET": {
                        try {

                            const data = savedData.getData(`post${req.path}`)

                            let result = [];

                            if (req.query && Object.keys(req.query).length !== 0) {
                                
                                for (let i in req.query) {

                                    data.forEach(item => {
                                        if (item.hasOwnProperty(i) && item[i] == req.query[i]) {
                                            result.push(item);
                                        }
                                    });

                                    result = result.filter(item => {
                                        return item[i] == req.query[i];
                                    });
                                    

                                    result = result.filter((item, pos) => {
                                        return result.indexOf(item) == pos;
                                    });

                                }
                                
                                return res.send(result);
                            }
                            
                            return res.send(data);

                        } catch (e) {

                            const routes = config.getData("/routes");
                            const filteredRoutes = routes.filter(item => {
                                return item.route == req.path && item.method == "POST";
                            });

                            if (filteredRoutes[0].itemType == 'collection') {

                                return res.send([]);

                            } else if (filteredRoutes[0].itemType == 'single') {

                                return res.send({});

                            } else {

                                return res.send({});

                            }
                        }
                    }
                        break;

                    case "DELETE": {

                        try {

                            const data = savedData.getData(`post${req.path}`);
                            const filteredPost = routes.filter(item => {
                                return item.route == req.path && item.method == "POST";
                            });
                            const filteredDelete = routes.filter(item => {
                                return item.route == req.path && item.method == "DELETE";
                            });

                            if (
                                filteredPost[0].itemType == 'collection' &&
                                !!filteredDelete[0].deleteByParam
                            ) {

                                const param = filteredDelete[0].deleteByParam;

                                const index = data.findIndex(item => item[param] == req.query[param]);

                                try {

                                    if (~index) {

                                        savedData.delete(`post${req.path}[${index}]`);
                                        return res.send({ message: 'Item has been deleted' });

                                    }

                                    return res.status(404).send({ message: 'Item is not found' });

                                } catch (e) {

                                    return res.status(404).send({ message: 'Item doesn\'t exist' });

                                }
                            } else if (filteredPost[0].itemType == 'single') {

                                try {

                                    savedData.delete(`post${req.path}`);
                                    return res.send({ message: 'Item has been deleted' });

                                } catch (e) {

                                    res.status(500);

                                }

                            }
                        } catch (e) {
                            res.status(404).send({ message: 'There is no data to delete' });
                        }
                    }
                        break;

                    default:
                        res.status(500).send({ message: 'Unknown method' });
                }

            } else {
                res.status(404).send({ message: 'Route not found' });
            }

        } catch (e) {
            res.status(404);
        }
    }
}

module.exports.Data = new Data;