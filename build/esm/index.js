import * as AuthenticationModule from '@chalkysticks/sdk-authentication';
import * as CoreModule from '@chalkysticks/sdk-core';
import * as PadModule from '@chalkysticks/sdk-pad';
import * as PlayersModule from '@chalkysticks/sdk-players';
import * as TVModule from '@chalkysticks/sdk-tv';
import * as VenuesModule from '@chalkysticks/sdk-venues';
import * as WalletModule from '@chalkysticks/sdk-wallet';
var ChalkySticks;
(function (ChalkySticks) {
    let Collection;
    (function (Collection) {
        Collection.Advertisement = CoreModule.Collection.Advertisement;
        Collection.Beacon = PlayersModule.Collection.Beacon;
        Collection.Diagram = PadModule.Collection.Diagram;
        Collection.Schedule = TVModule.Collection.Schedule;
        Collection.Venue = VenuesModule.Collection.Venue;
        Collection.VenueDetail = VenuesModule.Collection.VenueDetail;
        Collection.VenueMedia = VenuesModule.Collection.VenueMedia;
        Collection.VenueMeta = VenuesModule.Collection.VenueMeta;
        Collection.Wallet = WalletModule.Collection.Wallet;
    })(Collection = ChalkySticks.Collection || (ChalkySticks.Collection = {}));
    let Enum;
    (function (Enum) {
        Enum.GameType = TVModule.Enum.GameType;
    })(Enum = ChalkySticks.Enum || (ChalkySticks.Enum = {}));
    let Factory;
    (function (Factory) {
        Factory.Advertisement = CoreModule.Factory.Advertisement;
        Factory.Authentication = AuthenticationModule.Factory.Authentication;
        Factory.Beacon = PlayersModule.Factory.Beacon;
        Factory.Diagram = PadModule.Factory.Diagram;
        Factory.Live = TVModule.Factory.Live;
        Factory.Player = PlayersModule.Factory.Player;
        Factory.Schedule = TVModule.Factory.Schedule;
        Factory.Venue = VenuesModule.Factory.Venue;
    })(Factory = ChalkySticks.Factory || (ChalkySticks.Factory = {}));
    let Model;
    (function (Model) {
        Model.Advertisement = CoreModule.Model.Advertisement;
        Model.Authentication = AuthenticationModule.Model.Authentication;
        Model.Base = AuthenticationModule.Core.Model.Base;
        Model.Beacon = PlayersModule.Model.Beacon;
        Model.Diagram = PadModule.Model.Diagram;
        Model.Geocode = CoreModule.Model.Geocode;
        Model.Jwt = AuthenticationModule.Model.Jwt;
        Model.Schedule = TVModule.Model.Schedule;
        Model.User = AuthenticationModule.Core.Model.User;
        Model.Venue = VenuesModule.Model.Venue;
        Model.VenueDetail = VenuesModule.Model.VenueDetail;
        Model.VenueMedia = VenuesModule.Model.VenueMedia;
        Model.VenueMeta = VenuesModule.Model.VenueMeta;
        Model.Wallet = WalletModule.Model.Wallet;
    })(Model = ChalkySticks.Model || (ChalkySticks.Model = {}));
    ChalkySticks.Authentication = AuthenticationModule;
    ChalkySticks.Constants = CoreModule.Constants;
    ChalkySticks.Core = CoreModule;
    ChalkySticks.Environment = CoreModule.Environment;
    ChalkySticks.Exception = CoreModule.Exception;
    ChalkySticks.Pad = PadModule;
    ChalkySticks.Players = PlayersModule;
    ChalkySticks.TV = TVModule;
    ChalkySticks.Utility = CoreModule.Utility;
    ChalkySticks.Venues = VenuesModule;
    ChalkySticks.Wallet = WalletModule;
})(ChalkySticks || (ChalkySticks = {}));
export default ChalkySticks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLG9CQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxLQUFLLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELElBQVUsWUFBWSxDQXdEckI7QUF4REQsV0FBVSxZQUFZO0lBQ3JCLElBQWlCLFVBQVUsQ0FVMUI7SUFWRCxXQUFpQixVQUFVO1FBQ1osd0JBQWEsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNwRCxpQkFBTSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3pDLGtCQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdkMsbUJBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxnQkFBSyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3RDLHNCQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEQscUJBQVUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxvQkFBUyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzlDLGlCQUFNLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDdkQsQ0FBQyxFQVZnQixVQUFVLEdBQVYsdUJB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