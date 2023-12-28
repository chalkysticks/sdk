import * as Core from '@chalkysticks/sdk-core';
import * as Authentication from '@chalkysticks/sdk-authentication';
import * as Players from '@chalkysticks/sdk-players';
export { ChalkySticks } from '@chalkysticks/sdk-core';
export * as Core from '@chalkysticks/sdk-core';
export declare const Collection: {
    Base: typeof Core.Collection.Base;
    User: typeof Core.Collection.User;
};
export declare const Model: {
    Player: typeof Players.Model.Player;
    User: typeof Core.Model.User;
    Authentication: typeof Authentication.Model.Authentication;
    Jwt: typeof Authentication.Model.Jwt;
    Base: typeof Core.Model.Base;
};
