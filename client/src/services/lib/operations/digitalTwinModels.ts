/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/digitalTwinModelsMappers";
import * as Parameters from "../models/parameters";
import { AzureDigitalTwinsAPIContext } from "../azureDigitalTwinsAPIContext";

/** Class representing a DigitalTwinModels. */
export class DigitalTwinModels {
  private readonly client: AzureDigitalTwinsAPIContext;

  /**
   * Create a DigitalTwinModels.
   * @param {AzureDigitalTwinsAPIContext} client Reference to the service client.
   */
  constructor(client: AzureDigitalTwinsAPIContext) {
    this.client = client;
  }

  /**
   * Uploads one or more models. When any error occurs, no models are uploaded.
   * Status codes:
   * 200 (OK): Success.
   * 400 (Bad Request): The request is invalid.
   * 409 (Conflict): One or more of the provided models already exist.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinModelsAddResponse>
   */
  add(options?: Models.DigitalTwinModelsAddOptionalParams): Promise<Models.DigitalTwinModelsAddResponse>;
  /**
   * @param callback The callback
   */
  add(callback: msRest.ServiceCallback<Models.ModelData[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  add(options: Models.DigitalTwinModelsAddOptionalParams, callback: msRest.ServiceCallback<Models.ModelData[]>): void;
  add(options?: Models.DigitalTwinModelsAddOptionalParams | msRest.ServiceCallback<Models.ModelData[]>, callback?: msRest.ServiceCallback<Models.ModelData[]>): Promise<Models.DigitalTwinModelsAddResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      addOperationSpec,
      callback) as Promise<Models.DigitalTwinModelsAddResponse>;
  }

  /**
   * Retrieves model metadata and, optionally, model definitions.
   * Status codes:
   * 200 (OK): Success.
   * 400 (Bad Request): The request is invalid.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinModelsListResponse>
   */
  list(options?: Models.DigitalTwinModelsListOptionalParams): Promise<Models.DigitalTwinModelsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PagedModelDataCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.DigitalTwinModelsListOptionalParams, callback: msRest.ServiceCallback<Models.PagedModelDataCollection>): void;
  list(options?: Models.DigitalTwinModelsListOptionalParams | msRest.ServiceCallback<Models.PagedModelDataCollection>, callback?: msRest.ServiceCallback<Models.PagedModelDataCollection>): Promise<Models.DigitalTwinModelsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DigitalTwinModelsListResponse>;
  }

  /**
   * Retrieves model metadata and optionally the model definition.
   * Status codes:
   * 200 (OK): Success.
   * 404 (Not Found): There is no model with the provided id.
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinModelsGetByIdResponse>
   */
  getById(id: string, options?: Models.DigitalTwinModelsGetByIdOptionalParams): Promise<Models.DigitalTwinModelsGetByIdResponse>;
  /**
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param callback The callback
   */
  getById(id: string, callback: msRest.ServiceCallback<Models.ModelData>): void;
  /**
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(id: string, options: Models.DigitalTwinModelsGetByIdOptionalParams, callback: msRest.ServiceCallback<Models.ModelData>): void;
  getById(id: string, options?: Models.DigitalTwinModelsGetByIdOptionalParams | msRest.ServiceCallback<Models.ModelData>, callback?: msRest.ServiceCallback<Models.ModelData>): Promise<Models.DigitalTwinModelsGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.DigitalTwinModelsGetByIdResponse>;
  }

  /**
   * Updates the metadata for a model.
   * Status codes:
   * 200 (OK): Success.
   * 400 (Bad Request): The request is invalid.
   * 404 (Not Found): There is no model with the provided id.
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param updateModel An update specification described by JSON Patch. Only the decommissioned
   * property can be replaced.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(id: string, updateModel: any[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param updateModel An update specification described by JSON Patch. Only the decommissioned
   * property can be replaced.
   * @param callback The callback
   */
  update(id: string, updateModel: any[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param updateModel An update specification described by JSON Patch. Only the decommissioned
   * property can be replaced.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(id: string, updateModel: any[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(id: string, updateModel: any[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        updateModel,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Deletes a model. A model can only be deleted if no other models reference it.
   * Status codes:
   * 204 (No Content): Success.
   * 400 (Bad Request): The request is invalid.
   * 404 (Not Found): There is no model with the provided id.
   * 409 (Conflict): There are dependencies on the model that prevent it from being deleted.
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param callback The callback
   */
  deleteMethod(id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id The id for the model. The id is globally unique and case sensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves model metadata and, optionally, model definitions.
   * Status codes:
   * 200 (OK): Success.
   * 400 (Bad Request): The request is invalid.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DigitalTwinModelsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.DigitalTwinModelsListNextOptionalParams): Promise<Models.DigitalTwinModelsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PagedModelDataCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.DigitalTwinModelsListNextOptionalParams, callback: msRest.ServiceCallback<Models.PagedModelDataCollection>): void;
  listNext(nextPageLink: string, options?: Models.DigitalTwinModelsListNextOptionalParams | msRest.ServiceCallback<Models.PagedModelDataCollection>, callback?: msRest.ServiceCallback<Models.PagedModelDataCollection>): Promise<Models.DigitalTwinModelsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DigitalTwinModelsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "models",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "models"
    ],
    mapper: {
      serializedName: "models",
      constraints: {
        MinItems: 1,
        UniqueItems: true
      },
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Object"
          }
        }
      }
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModelData"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "models",
  queryParameters: [
    Parameters.dependenciesFor,
    Parameters.includeModelDefinition,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.maxItemCount0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedModelDataCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "models/{id}",
  urlParameters: [
    Parameters.id
  ],
  queryParameters: [
    Parameters.includeModelDefinition,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ModelData
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "models/{id}",
  urlParameters: [
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateModel",
    mapper: {
      required: true,
      serializedName: "updateModel",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Object"
          }
        }
      }
    }
  },
  contentType: "application/json-patch+json; charset=utf-8",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "models/{id}",
  urlParameters: [
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "http://localhost",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.maxItemCount0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedModelDataCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
