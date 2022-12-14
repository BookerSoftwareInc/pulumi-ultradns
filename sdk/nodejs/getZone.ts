// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this data source to get detailed information for your zones.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const zone = pulumi.output(ultradns.getZone({
 *     name: "example.com.",
 * }));
 * ```
 */
export function getZone(args: GetZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetZoneResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("ultradns:index/getZone:getZone", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getZone.
 */
export interface GetZoneArgs {
    /**
     * (String) Name of the zone.
     */
    name: string;
}

/**
 * A collection of values returned by getZone.
 */
export interface GetZoneResult {
    /**
     * (Computed) (String) Name of the account.
     */
    readonly accountName: string;
    /**
     * (Computed) (String) Whether or not the zone is signed with DNSSEC. Valid values are `SIGNED` or `UNSIGNED`.
     */
    readonly dnssecStatus: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * (Computed) (String) Describes the inherited zone transfer values from the Account. Valid values are `ALL`, `NONE`, any combination of `IP_RANGE`, `NOTIFY_IP`, `TSIG`. Multiple values are separated with a comma.<br/>
     * Example: `IP_RANGE, NOTIFY_IP`
     */
    readonly inherit: string;
    /**
     * (Computed) (String) The last date and time the zone was modified, represented in ISO8601 format(`yyyy-MM-ddTHH:mmZ`).<br/>
     * Example: `2021-12-07T11:25Z`.
     */
    readonly lastModifiedTime: string;
    readonly name: string;
    /**
     * (Computed) (String) The Notification Email for a secondary zone.
     */
    readonly notificationEmailAddress: string;
    /**
     * (Computed) (Block Set) Nested block describing the IPv4 Addresses that are notified when updates are made to the primary zone. The structure of this block is described below.
     */
    readonly notifyAddresses: outputs.GetZoneNotifyAddress[];
    /**
     * (Computed) (String) The name of the zone being aliased. The existing zone must be owned by the same account as the new zone.
     */
    readonly originalZoneName: string;
    /**
     * (Computed) (String) Name of the user that created the zone.
     */
    readonly owner: string;
    /**
     * (Computed) (Block Set) The structure of this block follows the same structure as the `nameServer` block described below. It is the info of primary name server.
     */
    readonly primaryNameServer1s: outputs.GetZonePrimaryNameServer1[];
    /**
     * (Computed) (Block Set) The structure of this block follows the same structure as the `nameServer` block described below. It is the info of first backup primary name server.
     */
    readonly primaryNameServer2s: outputs.GetZonePrimaryNameServer2[];
    /**
     * (Computed) (Block Set) The structure of this block follows the same structure as the `nameServer` block described below. It is the info of second backup primary name server.
     */
    readonly primaryNameServer3s: outputs.GetZonePrimaryNameServer3[];
    /**
     * (Computed) (Block Set) Nested block describing information about the name server configuration for this zone. The structure of this block is described below.
     */
    readonly registrarInfos: outputs.GetZoneRegistrarInfo[];
    /**
     * (Computed) (Integer) Number of records in the zone.
     */
    readonly resourceRecordCount: number;
    /**
     * (Computed) (Block Set) Nested block describing the list of IPv4 or IPv6 ranges that are allowed to transfer primary zones out using zone transfer protocol (AXFR/IXFR). The structure of this block is described below.
     */
    readonly restrictIps: outputs.GetZoneRestrictIp[];
    /**
     * (Computed) (String) Displays the status of the zone. Valid values are `ACTIVE`, `SUSPENDED` or `ERROR`.
     */
    readonly status: string;
    /**
     * (Computed) (Block Set) Nested block describing the zone transfer details. The structure of this block is described below.
     */
    readonly transferStatusDetails: outputs.GetZoneTransferStatusDetail[];
    /**
     * (Computed) (Block Set, Max: 1) Nested block describing the TSIG information for the primary zone. The structure of this block is described below.
     */
    readonly tsigs: outputs.GetZoneTsig[];
    /**
     * (Computed) (String) Type of zone. Valid values are `PRIMARY`, `SECONDARY` or `ALIAS`.
     */
    readonly type: string;
}

export function getZoneOutput(args: GetZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetZoneResult> {
    return pulumi.output(args).apply(a => getZone(a, opts))
}

/**
 * A collection of arguments for invoking getZone.
 */
export interface GetZoneOutputArgs {
    /**
     * (String) Name of the zone.
     */
    name: pulumi.Input<string>;
}
