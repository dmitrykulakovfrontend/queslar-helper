export interface ApiData {
  player: ApiDataPlayer;
  currency: { [key: string]: number };
  house: House;
  skills: { [key: string]: number };
  boosts: { [key: string]: number };
  partners: Partner[];
  pets: Pet[];
  stats: Stats;
  equipmentEquipped: EquipmentEquipped[];
  equipmentSlots: EquipmentSlots;
  fighters: Fighter[];
  fighterPresets: { [key: string]: FighterPreset };
  playerFighterData: PlayerFighterData;
  partyActions: PartyActionsClass;
  actions: PurpleActions;
  playerPetsData: PlayerPetsData;
  playerHomesteadData: PlayerHomesteadData;
  playerHomesteadDecorations: PlayerHomesteadDecoration[];
  playerTaxSettings: PlayerTaxSettings;
  miscData: { [key: string]: number };
  fighterCaveTools: { [key: string]: number };
  fighterCaveStats: FighterCaveStats;
  fighterCaveSettings: FighterCaveSettings;
  houseQueue: HouseQueue[];
  catacombBanner: { [key: string]: number };
  catacombCharacter: CatacombCharacter;
  catacombGuardian: CatacombGuardian[];
  catacombGeneral: CatacombGeneral;
  catacombHistory: CatacombHistory[];
  catacombTomeInventory: CatacombTomeInventory[];
  village: Village;
  kingdom: Kingdom;
  overview: ApiDataOverview;
  villageRank: VillageRank;
  partyData: PartyData;
  partyPvPData: PartyPvPData;
  returnTypeData: ReturnTypeData;
}

export interface PurpleActions {
  id: number;
  player_id: number;
  actions_remaining: number;
  action_type: string;
  default_actions: number;
  monster_id: number;
  harvest_type: string;
  harvest_area: string;
  area: number;
  last_harvest_income: number;
  last_battling_income: number;
  has_started_actions: number;
  highest_monster: number;
  last_boosted_income: number;
  actions_bought: number;
  actions_bought_tier: number;
}

export interface CatacombCharacter {
  id: number;
  player_id: number;
  health: number;
  damage: number;
  hit: number;
  dodge: number;
  crit_damage: number;
  crit_chance: number;
  water_damage: number;
  thunder_damage: number;
  fire_damage: number;
}

export interface CatacombGeneral {
  id: number;
  player_id: number;
  shop_upgrades: number;
  shop_refresh_used: number;
  shop_refresh_bought: number;
  tome_space_upgrades: number;
  max_guardian: number;
  max_tier: number;
  banner_resets: number;
}

export interface CatacombGuardian {
  id: number;
  player_id: number;
  guardian_id: number;
  health_upgrades: number;
  damage_upgrades: number;
  hit_upgrades: number;
  dodge_upgrades: number;
  crit_damage_upgrades: number;
  crit_chance_upgrades: number;
}

export interface CatacombHistory {
  id: number;
  income: number;
  start_time: string;
  log_time: string;
  player_id: number;
  survived: number;
  tier: number;
  monsters_slain: number;
  total_monsters: number;
  hp_remaining: string;
  emblem_gain: number;
  emblem_type: string;
}

export interface CatacombTomeInventory {
  id: number;
  player_id: number;
  name: string;
  uses_remaining: number;
  space_requirement: number;
  equipped: number;
  water_resistance: number;
  fire_resistance: number;
  thunder_resistance: number;
  melee_resistance: number;
  ranged_resistance: number;
  elemental_conversion: number;
  mob_multiplier: number;
  reward_multiplier: number;
  character_multiplier: number;
  mobs: number;
  skip: number;
  speed: number;
  multi_mob: number;
  lifesteal: number;
  gear_set: number;
}

export interface EquipmentEquipped {
  id: number;
  player_id: number;
  action_type: string;
  item_type: string;
  item_rarity: string;
  stat_slots: number;
  level_requirement: number;
  damage: number;
  defense: number;
  strength: number;
  health: number;
  agility: number;
  dexterity: number;
  owned_by_guild: number;
  guild_loaner_id: number;
  crafted: number;
  is_crafting: number;
  crafted_actions_required: number;
  crafted_actions_done: number;
  equipped: number;
  on_market: number;
  name: string;
  gear_set: number;
  in_queue: number;
  item_shop: number;
  locked: number;
  item_trade_locked: number;
  item_ownership: number;
  trashed: number;
  trashed_time: string;
  pvp_enchant: number;
  free_reroll: number;
  damage_tier: number;
  defense_tier: number;
  strength_tier: number;
  health_tier: number;
  agility_tier: number;
  dexterity_tier: number;
  slot_tier: number;
  i_level: number;
  post_catacomb: number;
  enchant_id: number;
  enchant_level: number;
  enchant_type: string;
  enchant_rarity: number;
  trade_locked: number;
  unequip_charges: number;
  enchant_value: number;
  gem_id: number;
  gem_type: string;
  gem_level: number;
  gem_value: number;
  gem_unequip_charges: number;
  gem_trade_locked: number;
  gem_splinter_type: string;
  gem_splinter_time: string;
  type: number;
}

export interface EquipmentSlots {
  id: number;
  player_id: number;
  left_hand_level: number;
  right_hand_level: number;
  head_level: number;
  body_level: number;
  hands_level: number;
  legs_level: number;
  feet_level: number;
}

export interface FighterCaveSettings {
  id: number;
  player_id: number;
  deeper_limit: number;
  leave_limit: number;
  default_mode: string;
  closest_tile_depth: number;
  max_depth: number;
  closest_tile_depth_type: string;
  rush_depth_max: number;
  skip_boss: number;
}

export interface FighterCaveStats {
  id: number;
  player_id: number;
  cave_strength: number;
  cave_health: number;
  cave_agility: number;
  cave_dexterity: number;
  cave_monster_strength: number;
  cave_monster_health: number;
  cave_monster_agility: number;
  cave_monster_dexterity: number;
}

export interface FighterPreset {
  assignment: string;
  fighters: Fighter[];
}

export interface Fighter {
  id: number;
  fighter_id: number;
  player_id: number;
  row_placement: number;
  column_placement: number;
  class: string;
  health: number;
  damage: number;
  hit: number;
  dodge: number;
  defense: number;
  crit_damage: number;
  preset?: number;
  equipment_id: number;
  name: string;
  item_id: number | null;
  item_player_id: number | null;
  item_depth: number | null;
  item_damage: number | null;
  item_health: number | null;
  item_defense: number | null;
  item_crit_damage: number | null;
  item_hit: number | null;
  item_dodge: number | null;
  item_block: number | null;
  item_round_healing: number | null;
  item_burning: number | null;
  item_all_attributes: number | null;
  item_damage_reduction: number | null;
  item_movement_regen: number | null;
  item_damage_tier: number | null;
  item_health_tier: number | null;
  item_defense_tier: number | null;
  item_crit_damage_tier: number | null;
  item_hit_tier: number | null;
  item_dodge_tier: number | null;
  item_block_tier: number | null;
  item_round_healing_tier: number | null;
  item_burning_tier: number | null;
  item_all_attributes_tier: number | null;
  item_damage_reduction_tier: number | null;
  item_movement_regen_tier: number | null;
  on_market: number | null;
  item_name: null | string;
  item_rarity: null | string;
  stat_slots: number | null;
  equipped: number | null;
  locked: number | null;
  item_trade_locked: number | null;
  item_unequip_charges: number | null;
  trashed: number | null;
  trashed_time: null | string;
  post_catacomb: number | null;
}

export interface House {
  id: number;
  player_id: number;
  chairs: number;
  stove: number;
  sink: number;
  basket: number;
  table: number;
  couch: number;
  carpet: number;
  candlestick: number;
  pitchfork: number;
  shed: number;
  fountain: number;
  tools: number;
  bed: number;
  closet: number;
  nightstand: number;
  window: number;
  current_building: string;
  building_timer: string;
  barrel: number;
  seconds_token: number;
  automation: number;
  token_percent: number;
  is_upgrade: number;
}

export interface HouseQueue {
  id: number;
  player_id: number;
  building: string;
  room: string;
  used_credits: number;
  level: number;
  is_upgrade: number;
}

export interface Kingdom {
  tiles: Tile[];
  overview: Array<OverviewElement[]>;
  explorationBoosts: ExplorationBoosts;
  activeExploration: ActiveExploration;
  gods: { [key: string]: number };
}

export interface ActiveExploration {
  id: number;
  kingdom_id: number;
  name: string;
  boost_amount: number;
  boost_type: string;
  duration: number;
  cost: number;
  zone_type: string;
  enemies: number;
  exploration_timer: string;
}

export interface ExplorationBoosts {
  id: number;
  kingdom_id: number;
  level: number;
  gold: number;
  resource: number;
  drop: number;
  stat: number;
  actions: number;
  pet: number;
  tax: number;
  house: number;
}

export interface OverviewElement {
  id?: number;
  owner_id?: number;
  name: string;
  members?: number;
  last_attack?: string;
  motd?: string;
  no_link_motd?: string;
  ironman?: number;
  village_owner_name?: string;
  catalog?: string;
  db?: string;
  table?: string;
  orgTable?: string;
  orgName?: string;
  charsetNr?: number;
  length?: number;
  type?: number;
  flags?: number;
  decimals?: number;
  zeroFill?: boolean;
  protocol41?: boolean;
}

export interface Tile {
  id: number;
  type: string;
  name: string;
  kingdom_id?: number;
  resource_one_type: string;
  resource_two_type: null | string;
  resource_three_type: null | string;
  resource_one_value: number;
  resource_two_value: number | null;
  resource_three_value: number | null;
  captured_time: string;
  village_id?: number;
}

export interface ApiDataOverview {
  id: number;
  owner_id: number;
  name: string;
  strength_available: number;
  level: number;
  experience: number;
  buildings: number;
  members: number;
  kingdom_id: number;
  active_quest: number;
  daily_quest_refreshes_used: number;
  daily_quest_refreshes_bought: number;
  last_quest_reset: string;
  last_quest_reset_player: number;
  ironman: number;
}

export interface Partner {
  id: number;
  player_id: number;
  action_id: number;
  harvest_area: string;
  name: string;
  partner_id: number;
  hunting: number;
  mining: number;
  woodcutting: number;
  stonecarving: number;
  battling_experience: number;
  hunting_experience: number;
  mining_experience: number;
  woodcutting_experience: number;
  stonecarving_experience: number;
  intelligence: number;
  speed: number;
  strength: number;
  health: number;
  agility: number;
  dexterity: number;
}

export interface PartyActionsClass {
  id: number;
  player_id: number;
  party_id: number;
  daily_actions_remaining: number;
  daily_actions_max: number;
  current_monster: number;
  current_area: number;
  highest_monster: number;
  actions_gained_today: number;
  actions_gained_yesterday: number;
}

export interface PartyData {
  partyInformation: { [key: string]: PartyInformation };
  partyTotal: Total;
  playerTotal: { [key: string]: Total };
}

export interface PartyInformation {
  actions: PartyActionsClass;
  player: PartyInformationPlayer;
}

export interface PartyInformationPlayer {
  id: number;
  leader: boolean;
  username: string;
}

export interface Total {
  liveBoosts: LiveBoosts;
  liveStats: LiveStats;
}

export interface LiveBoosts {
  critChance: number;
  critDamage: number;
  multistrikeChance: number;
  healingChance: number;
  defense: number;
  frenzy: number;
}

export interface LiveStats {
  damage: number;
  defense: number;
  strength: number;
  health: number;
  agility: number;
  dexterity: number;
  experience?: number;
  gold: number;
  stat?: number;
  drop: number;
  pets?: number;
}

export interface PartyPvPData {
  gold: number;
  resource: number;
  drop: number;
  stat: number;
  pet: number;
  house: number;
  actions: number;
  tax: number;
}

export interface Pet {
  id: number;
  player_id: number;
  level: number;
  experience: number;
  name: string;
  active_food: string;
  efficiency_tier: number;
  efficiency_lock: number;
  auto_feed: number;
  auto_feed_type: string;
  pet_id: number;
  strength: number;
  health: number;
  agility: number;
  dexterity: number;
  monster_strength: number;
  monster_health: number;
  monster_agility: number;
  monster_dexterity: number;
  meat: number;
  iron: number;
  wood: number;
  food: number;
  stone?: number;
}

export interface ApiDataPlayer {
  ironman_type: number;
  account_id: number;
  pvp_rank: number;
  last_seen: string;
  title_placement: string;
  qol_destroy_item_slot: null;
  qol_destroy_item_level: null;
  qol_destroy_item_singular_stat: null;
  qol_destroy_item_sum_stat: number;
  title: string;
  username: string;
  battle_sim_uses: number;
  id: number;
  access_level: number;
  guest_account: number;
  village_id: number;
  party_id: number;
  vip_time: string;
  toggle_vip_icon: number;
  qol_time: string;
  toggle_qol_icon: number;
  qol_destroy_item_toggle: number;
  qol_destroy_item_rarity: string;
  second_icon_id: number;
  first_icon_id: number;
}

export interface PlayerFighterData {
  id: number;
  player_id: number;
  daily_attacks_used: number;
  fighters: number;
  elo: number;
  dungeon_level: number;
  automation: number;
  automation_attempts_hour: number;
  automation_attempts_limit: number;
}

export interface PlayerHomesteadData {
  id: number;
  player_id: number;
  plots: number;
  mine_level: number;
  farm_level: number;
  logging_level: number;
  fishing_level: number;
}

export interface PlayerHomesteadDecoration {
  id: number;
  name: string;
  player_id: number;
  x: number;
  y: number;
  size: number;
  plot: number;
  strength: number;
  health: number;
  agility: number;
  dexterity: number;
  pet_exp_boost: number;
  pet_strength_boost: number;
  pet_health_boost: number;
  pet_agility_boost: number;
  pet_dexterity_boost: number;
  trashed: number;
  trashed_time: string;
  size_decreases: number;
}

export interface PlayerPetsData {
  id: number;
  player_id: number;
  farm_strength: number;
  farm_health: number;
  farm_agility: number;
  farm_dexterity: number;
}

export interface PlayerTaxSettings {
  id?: number;
  player_id?: number;
  experience_tax: number;
  gold_tax: number;
  resources_tax: number;
  relics_tax: number;
  experience_tax_party: number;
  gold_tax_party: number;
  relics_tax_party: number;
  relics_tax_partner: number;
}

export interface ReturnTypeData {
  type: string;
  playerId: number;
}

export interface Stats {
  id: number;
  player_id: number;
  strength: number;
  health: number;
  agility: number;
  dexterity: number;
}

export interface Village {
  boosts: { [key: string]: number };
  strengths: { [key: string]: number };
  overview: ApiDataOverview;
  taxes: PlayerTaxSettings;
  tiles: Tile[];
  gods: { [key: string]: number };
  currency: Currency;
}

export interface Currency {
  id: number;
  village_id: number;
  gold: number;
  meat: number;
  iron: number;
  wood: number;
  stone: number;
  relics: number;
  credits: number;
  faith: number;
}

export interface VillageRank {
  id: number;
  name: string;
  upgrade_buildings: number;
  assign_strength: number;
  kick: number;
  accept: number;
  start_quest: number;
  remove_items: number;
  wire: number;
  kingdom: number;
  settings: number;
  communication: number;
  assign_ranks: number;
  mute: number;
  goals: number;
  gold_tax: number;
  gold_tax_value: number;
  resources_tax: number;
  resources_tax_value: number;
  experience_tax: number;
  experience_tax_value: number;
  relics_tax: number;
  relics_tax_value: number;
  map_movement: number;
  map_attacking: number;
  map_spying: number;
  edit: number;
  groups: number;
  gold_tax_party: number;
  experience_tax_party: number;
  relics_tax_party: number;
  relics_tax_partner: number;
}
