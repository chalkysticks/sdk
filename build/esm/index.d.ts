import * as AuthenticationModule from '@chalkysticks/sdk-authentication';
import * as CoreModule from '@chalkysticks/sdk-core';
import * as PadModule from '@chalkysticks/sdk-pad';
import * as PlayersModule from '@chalkysticks/sdk-players';
import * as TVModule from '@chalkysticks/sdk-tv';
import * as VenuesModule from '@chalkysticks/sdk-venues';
import * as WalletModule from '@chalkysticks/sdk-wallet';
declare namespace ChalkySticks {
    namespace Collection {
        export import Beacon = PlayersModule.Collection.Beacon;
        export import Diagram = PadModule.Collection.Diagram;
        export import Schedule = TVModule.Collection.Schedule;
        export import Venue = VenuesModule.Collection.Venue;
        export import VenueDetail = VenuesModule.Collection.VenueDetail;
        export import VenueMedia = VenuesModule.Collection.VenueMedia;
        export import VenueMeta = VenuesModule.Collection.VenueMeta;
        export import Wallet = WalletModule.Collection.Wallet;
    }
    namespace Enum {
        export import GameType = TVModule.Enum.GameType;
    }
    namespace Factory {
        export import Beacon = PlayersModule.Factory.Beacon;
        export import Diagram = PadModule.Factory.Diagram;
        export import Player = PlayersModule.Factory.Player;
        export import Schedule = TVModule.Factory.Schedule;
        export import Venue = VenuesModule.Factory.Venue;
    }
    namespace Model {
        export import Authentication = AuthenticationModule.Model.Authentication;
        export import Base = AuthenticationModule.Core.Model.Base;
        export import Beacon = PlayersModule.Model.Beacon;
        export import Diagram = PadModule.Model.Diagram;
        export import Geocode = CoreModule.Model.Geocode;
        export import Jwt = AuthenticationModule.Model.Jwt;
        export import Schedule = TVModule.Model.Schedule;
        export import User = AuthenticationModule.Core.Model.User;
        export import Venue = VenuesModule.Model.Venue;
        export import VenueDetail = VenuesModule.Model.VenueDetail;
        export import VenueMedia = VenuesModule.Model.VenueMedia;
        export import VenueMeta = VenuesModule.Model.VenueMeta;
        export import Wallet = WalletModule.Model.Wallet;
    }
    export import Authentication = AuthenticationModule;
    export import Core = CoreModule;
    export import Pad = PadModule;
    export import Players = PlayersModule;
    export import TV = TVModule;
    export import Venues = VenuesModule;
    export import Wallet = WalletModule;
}
export default ChalkySticks;
