// src/index.ts
import * as AuthenticationModule from '@chalkysticks/sdk-authentication';
import * as CoreModule from '@chalkysticks/sdk-core';
import * as MediaModule from '@chalkysticks/sdk-media';
import * as PadModule from '@chalkysticks/sdk-pad';
import * as PlayersModule from '@chalkysticks/sdk-players';
import * as TVModule from '@chalkysticks/sdk-tv';
import * as VenuesModule from '@chalkysticks/sdk-venues';

namespace ChalkySticks {
	export namespace Collection {
		export import Advertisement = CoreModule.Collection.Advertisement;
		export import Beacon = PlayersModule.Collection.Beacon;
		export import Content = CoreModule.Collection.Content;
		export import ContentTag = CoreModule.Collection.ContentTag;
		export import Diagram = PadModule.Collection.Diagram;
		export import Media = CoreModule.Collection.Media;
		// export import Media = MediaModule.Collection.Media;
		export import Meta = CoreModule.Collection.Meta;
		export import Player = PlayersModule.Collection.Player;
		export import Rulebook = CoreModule.Collection.Rulebook;
		export import Schedule = TVModule.Collection.Schedule;
		export import Statistic = CoreModule.Collection.Statistic;
		export import User = CoreModule.Collection.User;
		export import UserMedia = MediaModule.Collection.UserMedia;
		export import Venue = VenuesModule.Collection.Venue;
		export import VenueDetail = VenuesModule.Collection.VenueDetail;
		export import VenueHour = VenuesModule.Collection.VenueHour;
		export import VenueMedia = MediaModule.Collection.VenueMedia;
		export import Wallet = CoreModule.Collection.Wallet;
	}

	export namespace Enum {
		export import Achievement = CoreModule.Enum.Achievement;
		export import ContentMediaType = CoreModule.Enum.ContentMediaType;
		export import ContentType = CoreModule.Enum.ContentType;
		export import Currency = CoreModule.Enum.Currency;
		export import GameType = TVModule.Enum.GameType;
		export import MediaGroup = CoreModule.Enum.MediaGroup;
		export import MediaType = CoreModule.Enum.MediaType;
		export import ProductType = CoreModule.Enum.ProductType;
		export import VenueType = VenuesModule.Enum.VenueType;
	}

	export namespace Factory {
		export import Advertisement = CoreModule.Factory.Advertisement;
		export import Authentication = AuthenticationModule.Factory.Authentication;
		export import Beacon = PlayersModule.Factory.Beacon;
		export import Content = CoreModule.Factory.Content;
		export import Diagram = PadModule.Factory.Diagram;
		export import Geocode = CoreModule.Factory.Geocode;
		export import Live = TVModule.Factory.Live;
		export import Player = PlayersModule.Factory.Player;
		export import Rulebook = CoreModule.Factory.Rulebook;
		export import Schedule = TVModule.Factory.Schedule;
		export import Statistic = CoreModule.Factory.Statistic;
		export import User = CoreModule.Factory.User;
		export import UserMedia = MediaModule.Factory.UserMedia;
		export import Venue = VenuesModule.Factory.Venue;
		export import VenueMedia = MediaModule.Factory.VenueMedia;
		export import Wallet = CoreModule.Factory.Wallet;
	}

	export namespace Model {
		export import Advertisement = CoreModule.Model.Advertisement;
		export import Authentication = AuthenticationModule.Model.Authentication;
		export import Base = AuthenticationModule.Core.Model.Base;
		export import Beacon = PlayersModule.Model.Beacon;
		export import Content = CoreModule.Model.Content;
		export import ContentTag = CoreModule.Model.ContentTag;
		export import Diagram = PadModule.Model.Diagram;
		export import Geocode = CoreModule.Model.Geocode;
		export import Jwt = AuthenticationModule.Model.Jwt;
		export import Media = CoreModule.Model.Media;
		export import Meta = CoreModule.Model.Meta;
		export import Player = PlayersModule.Model.Player;
		export import Rulebook = CoreModule.Model.Rulebook;
		export import Schedule = TVModule.Model.Schedule;
		export import Statistic = CoreModule.Model.Statistic;
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
