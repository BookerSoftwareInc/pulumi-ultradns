# Pulumi Bridge Terraform Provider For UltraDns

## Overview

The UltraDNS provider for Pulumi can be used to provision *most* of the resources available in UltraDNS. The UltraDNS provider must be configured with credentials to deploy and update resources in UltraDNS.

## Example

```typescript
import * as ultradns from `@mb-platform2/ultradns`

const exampleRecord = new ultradns.Record('exampleCnameRecord`, {
    ownerName: 'host.example.com'
    recordType: 'CNAME',
    zoneName: 'example.com'
    ttl: 3600,
    recordDatas: ['example-app-alb-1234567890.us-east-2.elb.amazonaws.com']
});
```

## Installation & Configuration

- JavaScript/TypeScript: `@pulumi/ultradns`

### Credentials

```bash
export ULTRADNS_USERNAME="user.name"
export ULTRADNS_PASSWORD="superSecretPassword1"
export ULTRADNS_HOST_URL="https://api.ultradns.com/"
```

## Package Resources

This package was created using the [guide for authoring and publishing a Pulumi Package](https://www.pulumi.com/docs/guides/pulumi-packages/how-to-author).

Learn about the concepts behind [Pulumi Packages](https://www.pulumi.com/docs/guides/pulumi-packages/#pulumi-packages).

Based upon the UltraDNS Terraform Provider:

- <https://registry.terraform.io/providers/ultradns/ultradns/latest/docs>
- <https://github.com/ultradns/terraform-provider-ultradns>

