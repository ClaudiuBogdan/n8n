import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class GhostAdminApi implements ICredentialType {
	name = 'ghostAdminApi';
	displayName = 'Ghost Admin API';
	documentationUrl = 'ghost';
	properties = [
		{
			displayName: 'URL',
			name: 'url',
			type: 'string' as NodePropertyTypes,
			default: '',
			placeholder: 'http://localhost:3001',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
