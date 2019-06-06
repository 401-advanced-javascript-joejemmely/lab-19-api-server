'use strict';

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 */

const cwd = process.cwd();

const express = require('express');

const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../docs/config/swagger.json');

const events = require('../../utils/events.js');
const QClient = require('@nmq/q/client');

// JSDocs
router.use('/doc', express.static('./docs/'));

// Swagger Route
router.use('/api/v1/doc', swaggerUi.serve);
router.get('/api/v1/doc', swaggerUi.setup(swaggerDocument));

// Evaluate the model, dynamically
router.param('model', modelFinder);

// API Routes
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);

// Route Handlers

function handleGetAll(request, response, next) {
  request.model
    .get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      QClient.publish('database', events.database.READ, {
        message: 'Something was read',
        data,
      });
      response.status(200).json(output);
    })
    .catch(next);
}

function handleGetOne(request, response, next) {
  request.model
    .get(request.params.id)
    .then(result => {
      QClient.publish('database', events.database.READ, {
        message: 'Something was read',
        data: result,
      });
      return response.status(200).json(result[0]);
    })
    .catch(next);
}

function handlePost(request, response, next) {
  request.model
    .post(request.body)
    .then(result => {
      QClient.publish('database', events.database.CREATE, {
        message: 'Something was created',
        data: result,
      });
      return response.status(200).json(result);
    })
    .catch(next);
}

function handlePut(request, response, next) {
  request.model
    .put(request.params.id, request.body)
    .then(result => {
      QClient.publish('database', events.database.UPDATE, {
        message: 'Something was updated',
        data: result,
      });
      return response.status(200).json(result);
    })
    .catch(next);
}

function handleDelete(request, response, next) {
  request.model
    .delete(request.params.id)
    .then(result => {
      QClient.publish('database', events.database.DELETE, {
        message: 'Something was deleted',
        data: result,
      });
      return response.status(200).json(result);
    })
    .catch(next);
}

module.exports = router;
