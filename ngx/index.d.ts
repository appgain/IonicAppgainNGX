import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name AppgainPlugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AppgainPlugin } from '@ionic-native/appgain-plugin/ngx';
 *
 *
 * constructor(private appgain: AppgainPlugin) { }
 *
 * ...
 *
 *
 * this.appgain.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class AppgainPlugin extends IonicNativePlugin {
    /**
     * @param appId {string}
     * @param apiKey {string}
     * @param autoConfigure {boolean}
     * @return {Promise<any>} Returns a promise
     */
    initSDK(appId: string, apiKey: string, autoConfigure: boolean): Promise<any>;
    /**
     * @return {Promise<any>} Returns a promise
     */
    matchLink(): Promise<any>;
    /**
     * @param triggerPointName {string}
     * @param payload {any}
     * @return {Promise<any>} Returns a promise
     */
    fireAutomator(triggerPointName: string, payload: any): Promise<any>;
    /**
     * @param name {string}
     * @param amount {number}
     * @param currency {string}
     * @return {Promise<any>} Returns a promise
     */
    addPurchase(name: string, amount: number, currency: string): Promise<any>;
    /**
     * @param type {string}
     * @param target {string}
     * @return {Promise<any>} Returns a promise
     */
    addNotificationChannel(type: string, target: string): Promise<any>;
    /**
     * @param event {string}
     * @param action {string}
     * @param extras {any}
     * @return {Promise<any>} Returns a promise
     */
    logEvent(event: string, action: string, extras: any): Promise<any>;
    /**
     * @return {Promise<any>} Returns a promise
     */
    getUserId(): Promise<any>;
    /**
     * @param id {string} User ID
     * @return {Promise<any>} Returns a promise
     */
    setUserId(id: string): Promise<any>;
    /**
     * @param appId {string}
     * @param apiKey {string}
     * @param autoConfigure {boolean}
     * @return {Promise<any>} Returns a promise
     */
    updateUserData(userData: any): Promise<any>;
}
