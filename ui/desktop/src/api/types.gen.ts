// This file is auto-generated by @hey-api/openapi-ts

export type ConfigKey = {
    default?: string | null;
    name: string;
    required: boolean;
    secret: boolean;
};

export type ConfigKeyQuery = {
    is_secret: boolean;
    key: string;
};

export type ConfigResponse = {
    config: {};
};

export type ExtensionQuery = {
    config: unknown;
    name: string;
};

export type ProviderDetails = {
    /**
     * Indicates whether the provider is fully configured
     */
    is_configured: boolean;
    metadata: ProviderMetadata;
    /**
     * Unique identifier and name of the provider
     */
    name: string;
};

/**
 * Metadata about a provider's configuration requirements and capabilities
 */
export type ProviderMetadata = {
    /**
     * Required configuration keys
     */
    config_keys: Array<ConfigKey>;
    /**
     * The default/recommended model for this provider
     */
    default_model: string;
    /**
     * Description of the provider's capabilities
     */
    description: string;
    /**
     * Display name for the provider in UIs
     */
    display_name: string;
    /**
     * A list of currently known models
     * TODO: eventually query the apis directly
     */
    known_models: Array<string>;
    /**
     * Link to the docs where models can be found
     */
    model_doc_link: string;
    /**
     * The unique identifier for this provider
     */
    name: string;
};

export type ProvidersResponse = {
    providers: Array<ProviderDetails>;
};

export type UpsertConfigQuery = {
    is_secret: boolean;
    key: string;
    value: unknown;
};

export type ReadAllConfigData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/config';
};

export type ReadAllConfigResponses = {
    /**
     * All configuration values retrieved successfully
     */
    200: ConfigResponse;
};

export type ReadAllConfigResponse = ReadAllConfigResponses[keyof ReadAllConfigResponses];

export type RemoveExtensionData = {
    body: ConfigKeyQuery;
    path?: never;
    query?: never;
    url: '/config/extension';
};

export type RemoveExtensionErrors = {
    /**
     * Extension not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type RemoveExtensionResponses = {
    /**
     * Extension removed successfully
     */
    200: string;
};

export type RemoveExtensionResponse = RemoveExtensionResponses[keyof RemoveExtensionResponses];

export type AddExtensionData = {
    body: ExtensionQuery;
    path?: never;
    query?: never;
    url: '/config/extension';
};

export type AddExtensionErrors = {
    /**
     * Invalid request
     */
    400: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type AddExtensionResponses = {
    /**
     * Extension added successfully
     */
    200: string;
};

export type AddExtensionResponse = AddExtensionResponses[keyof AddExtensionResponses];

export type UpdateExtensionData = {
    body: ExtensionQuery;
    path?: never;
    query?: never;
    url: '/config/extension';
};

export type UpdateExtensionErrors = {
    /**
     * Extension not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type UpdateExtensionResponses = {
    /**
     * Extension configuration updated successfully
     */
    200: string;
};

export type UpdateExtensionResponse = UpdateExtensionResponses[keyof UpdateExtensionResponses];

export type ProvidersData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/config/providers';
};

export type ProvidersResponses = {
    /**
     * All configuration values retrieved successfully
     */
    200: Array<ProviderDetails>;
};

export type ProvidersResponse2 = ProvidersResponses[keyof ProvidersResponses];

export type ReadConfigData = {
    body: ConfigKeyQuery;
    path?: never;
    query?: never;
    url: '/config/read';
};

export type ReadConfigErrors = {
    /**
     * Configuration key not found
     */
    404: unknown;
};

export type ReadConfigResponses = {
    /**
     * Configuration value retrieved successfully
     */
    200: unknown;
};

export type RemoveConfigData = {
    body: ConfigKeyQuery;
    path?: never;
    query?: never;
    url: '/config/remove';
};

export type RemoveConfigErrors = {
    /**
     * Configuration key not found
     */
    404: unknown;
    /**
     * Internal server error
     */
    500: unknown;
};

export type RemoveConfigResponses = {
    /**
     * Configuration value removed successfully
     */
    200: string;
};

export type RemoveConfigResponse = RemoveConfigResponses[keyof RemoveConfigResponses];

export type UpsertConfigData = {
    body: UpsertConfigQuery;
    path?: never;
    query?: never;
    url: '/config/upsert';
};

export type UpsertConfigErrors = {
    /**
     * Internal server error
     */
    500: unknown;
};

export type UpsertConfigResponses = {
    /**
     * Configuration value upserted successfully
     */
    200: string;
};

export type UpsertConfigResponse = UpsertConfigResponses[keyof UpsertConfigResponses];

export type ClientOptions = {
    baseUrl: `${string}://${string}` | (string & {});
};