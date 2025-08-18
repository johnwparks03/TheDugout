"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchEventType = void 0;
var MatchEventType;
(function (MatchEventType) {
    MatchEventType["GOAL"] = "goal";
    MatchEventType["ASSIST"] = "assist";
    MatchEventType["YELLOW_CARD"] = "yellow_card";
    MatchEventType["RED_CARD"] = "red_card";
    MatchEventType["SUBSTITUTION"] = "substitution";
    MatchEventType["OWN_GOAL"] = "own_goal";
    MatchEventType["PENALTY_MISSED"] = "penalty_missed";
    MatchEventType["FOUL_COMMITTED"] = "foul_committed";
    MatchEventType["OTHER"] = "other";
})(MatchEventType || (exports.MatchEventType = MatchEventType = {}));
