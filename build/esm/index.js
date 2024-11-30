import * as AuthenticationModule from '@chalkysticks/sdk-authentication';
import * as CoreModule from '@chalkysticks/sdk-core';
import * as PadModule from '@chalkysticks/sdk-pad';
import * as PlayersModule from '@chalkysticks/sdk-players';
import * as TVModule from '@chalkysticks/sdk-tv';
import * as VenuesModule from '@chalkysticks/sdk-venues';
var ChalkySticks;
(function (ChalkySticks) {
    let Collection;
    (function (Collection) {
        Collection.Advertisement = CoreModule.Collection.Advertisement;
        Collection.Beacon = PlayersModule.Collection.Beacon;
        Collection.Diagram = PadModule.Collection.Diagram;
        Collection.Media = CoreModule.Collection.Media;
        Collection.Meta = CoreModule.Collection.Meta;
        Collection.Schedule = TVModule.Collection.Schedule;
        Collection.Venue = VenuesModule.Collection.Venue;
        Collection.VenueDetail = VenuesModule.Collection.VenueDetail;
        Collection.VenueHour = VenuesModule.Collection.VenueHour;
        Collection.Wallet = CoreModule.Collection.Wallet;
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
        Factory.Geocode = CoreModule.Factory.Geocode;
        Factory.Live = TVModule.Factory.Live;
        Factory.Player = PlayersModule.Factory.Player;
        Factory.Schedule = TVModule.Factory.Schedule;
        Factory.User = CoreModule.Factory.User;
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
        Model.Media = CoreModule.Model.Media;
        Model.Meta = CoreModule.Model.Meta;
        Model.Schedule = TVModule.Model.Schedule;
        Model.User = AuthenticationModule.Core.Model.User;
        Model.Venue = VenuesModule.Model.Venue;
        Model.VenueDetail = VenuesModule.Model.VenueDetail;
        Model.VenueHour = VenuesModule.Model.VenueHour;
        Model.Wallet = CoreModule.Model.Wallet;
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
})(ChalkySticks || (ChalkySticks = {}));
export default ChalkySticks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLG9CQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxLQUFLLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxJQUFVLFlBQVksQ0EyRHJCO0FBM0RELFdBQVUsWUFBWTtJQUNyQixJQUFpQixVQUFVLENBVzFCO0lBWEQsV0FBaUIsVUFBVTtRQUNaLHdCQUFhLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDcEQsaUJBQU0sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxrQkFBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLGdCQUFLLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDcEMsZUFBSSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2xDLG1CQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEMsZ0JBQUssR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN0QyxzQkFBVyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xELG9CQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDOUMsaUJBQU0sR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDLEVBWGdCLFVBQVUs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