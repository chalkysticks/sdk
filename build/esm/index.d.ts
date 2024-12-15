import * as AuthenticationModule from '@chalkysticks/sdk-authentication';
import * as CoreModule from '@chalkysticks/sdk-core';
import * as PadModule from '@chalkysticks/sdk-pad';
import * as PlayersModule from '@chalkysticks/sdk-players';
import * as TVModule from '@chalkysticks/sdk-tv';
import * as VenuesModule from '@chalkysticks/sdk-venues';
declare namespace ChalkySticks {
    namespace Collection {
        export import Advertisement = CoreModule.Collection.Advertisement;
        export import Beacon = PlayersModule.Collection.Beacon;
        export import Diagram = PadModule.Collection.Diagram;
        export import Media = CoreModule.Collection.Media;
        export import Meta = CoreModule.Collection.Meta;
        export import Player = PlayersModule.Collection.Player;
        export import Rulebook = CoreModule.Collection.Rulebook;
        export import Schedule = TVModule.Collection.Schedule;
        export import Venue = VenuesModule.Collection.Venue;
        export import VenueDetail = VenuesModule.Collection.VenueDetail;
        export import VenueHour = VenuesModule.Collection.VenueHour;
        export import Wallet = CoreModule.Collection.Wallet;
    }
    namespace Enum {
        export import GameType = TVModule.Enum.GameType;
    }
    namespace Factory {
        export import Advertisement = CoreModule.Factory.Advertisement;
        export import Authentication = AuthenticationModule.Factory.Authentication;
        export import Beacon = PlayersModule.Factory.Beacon;
        export import Diagram = PadModule.Factory.Diagram;
        export import Geocode = CoreModule.Factory.Geocode;
        export import Live = TVModule.Factory.Live;
        export import Player = PlayersModule.Factory.Player;
        export import Rulebook = CoreModule.Factory.Rulebook;
        export import Schedule = TVModule.Factory.Schedule;
        export import User = CoreModule.Factory.User;
        export import Venue = VenuesModule.Factory.Venue;
        export import Wallet = CoreModule.Factory.Wallet;
    }
    namespace Model {
        export import Advertisement = CoreModule.Model.Advertisement;
        export import Authentication = AuthenticationModule.Model.Authentication;
        export import Base = AuthenticationModule.Core.Model.Base;
        export import Beacon = PlayersModule.Model.Beacon;
        export import Diagram = PadModule.Model.Diagram;
        export import Geocode = CoreModule.Model.Geocode;
        export import Jwt = AuthenticationModule.Model.Jwt;
        export import Media = CoreModule.Model.Media;
        export import Meta = CoreModule.Model.Meta;
        export import Player = PlayersModule.Model.Player;
        export import Rulebook = CoreModule.Model.Rulebook;
        export import Schedule = TVModule.Model.Schedule;
        export import User = AuthenticationModule.Core.Model.User;
        export import Venue = VenuesModule.Model.Venue;
        export import VenueDetail = VenuesModule.Model.VenueDetail;
        export import VenueHour = VenuesModule.Model.VenueHour;
        export import Wallet = CoreModule.Model.Wallet;
    }
    export import Authentication = AuthenticationModule;
    export import Constants = CoreModule.Constants;
    export import Core = CoreModule;
    export import Environment = CoreModule.Environment;
    export import Exception = CoreModule.Exception;
    export import Pad = PadModule;
    export import Players = PlayersModule;
    export import TV = TVModule;
    export import Utility = CoreModule.Utility;
    export import Venues = VenuesModule;
}
export default ChalkySticks;
