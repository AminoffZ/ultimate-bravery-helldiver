export type ItemCategory =
  | "armor"
  | "mainhand"
  | "sidearm"
  | "grenade"
  | "stratagem";

const items: {
  [key in ItemCategory]: {
    name: string;
    image: string;
  }[];
} = {
  armor: [
    {
      name: "SC-34 Infiltrator",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/78/SC-34_INFILTRATOR.png/revision/latest/scale-to-width-down/143?cb=20240411051341",
    },
    {
      name: "CE-74 Breaker",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e4/CE-74_BREAKER.png/revision/latest/scale-to-width-down/143?cb=20240411044537",
    },
    {
      name: "CM-21 Trench Paramedic",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/31/CM-21_TRENCH_PARAMEDIC.png/revision/latest/scale-to-width-down/143?cb=20240411050507",
    },
    {
      name: "FS-38 Eradicator",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/cb/FS-38_ERADICATOR.png/revision/latest/scale-to-width-down/143?cb=20240411051224",
    },
    {
      name: "SC-37 Legionnaire",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/33/SC-37_LEGIONNAIRE.png/revision/latest/scale-to-width-down/143?cb=20240411051352",
    },
    {
      name: "B-08 Light Gunner",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a7/B-08_LIGHT_GUNNER.png/revision/latest/scale-to-width-down/143?cb=20240411043818",
    },
    {
      name: "B-01 Tactical",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d0/B-01_TACTICAL.png/revision/latest/scale-to-width-down/143?cb=20240411043759",
    },
    {
      name: "CE-81 Juggernaut",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/78/CE-81_JUGGERNAUT.png/revision/latest/scale-to-width-down/143?cb=20240411045518",
    },
    {
      name: "CM-09 Bonesnapper",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/4e/CM-09_BONESNAPPER.png/revision/latest/scale-to-width-down/143?cb=20240411050114",
    },
    {
      name: "CE-35 Trench Engineer",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/3f/CE-35_TRENCH_ENGINEER.png/revision/latest/scale-to-width-down/143?cb=20240411044525",
    },
    {
      name: "DP-40 Hero of the Federation",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/46/DP-40_HERO_OF_THE_FEDERATION.png/revision/latest/scale-to-width-down/142?cb=20240411050917",
    },
    {
      name: "DP-53 Savior of the Free",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/de/DP-53_SAVIOR_OF_THE_FREE.png/revision/latest/scale-to-width-down/143?cb=20240411051001",
    },
    {
      name: "B-24 Enforcer",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/85/B-24_ENFORCER.png/revision/latest/scale-to-width-down/143?cb=20240411043834",
    },
    {
      name: "SC-15 Drone Master",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/75/SC-15_DRONE_MASTER.png/revision/latest/scale-to-width-down/143?cb=20240411051318",
    },
    {
      name: "SA-25 Steel Trooper",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2e/SA-25_STEEL_TROOPER.png/revision/latest/scale-to-width-down/143?cb=20240411051302",
    },
    {
      name: "FS-05 Marksman",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/de/FS-05_MARKSMAN.png/revision/latest/scale-to-width-down/143?cb=20240411051033",
    },
    {
      name: "FS-27 Fortified Commando",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d4/B-27_FORTIFIED_COMMANDO.png/revision/latest/scale-to-width-down/142?cb=20240411043849",
    },
    {
      name: "FS-11 Executioner",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d4/FS-11_EXECUTIONER.png/revision/latest/scale-to-width-down/143?cb=20240411051155",
    },
  ],
  mainhand: [
    {
      name: "AR-23 Liberator",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c7/Screenshot_2024-03-09_113554.png/revision/latest/scale-to-width-down/128?cb=20240309193613",
    },
    {
      name: "AR-23P Liberator Penetrator",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/dc/Screenshot_2024-03-09_115257.png/revision/latest/scale-to-width-down/128?cb=20240309195315",
    },
    {
      name: "AR-23C Liberator Concussive",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/99/Screenshot_2024-03-09_115329.png/revision/latest/scale-to-width-down/128?cb=20240309195348",
    },
    {
      name: "SG-8 Punisher",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/79/Screenshot_2024-03-09_115419.png/revision/latest/scale-to-width-down/128?cb=20240309195443",
    },
    {
      name: "SG-8S Slugger",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/28/Screenshot_2024-03-09_115515.png/revision/latest/scale-to-width-down/128?cb=20240309195534",
    },
    {
      name: "SG-225 Breaker",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/88/Screenshot_2024-03-09_115559.png/revision/latest/scale-to-width-down/128?cb=20240309195620",
    },
    {
      name: "SG-225IE Breaker Incendiary",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e0/Screenshot_2024-03-09_115701.png/revision/latest/scale-to-width-down/128?cb=20240309195719",
    },
    {
      name: "SG-225SP Breaker Spray&Pray",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/61/BreakerSpray%26Pray.png/revision/latest/scale-to-width-down/128?cb=20240404191849",
    },
    {
      name: "MP-98 Knight SMG",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a0/Screenshot_2024-03-09_115809.png/revision/latest/scale-to-width-down/128?cb=20240309195828",
    },
    {
      name: "SMG-37 Defender",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/81/Screenshot_2024-03-09_115854.png/revision/latest/scale-to-width-down/128?cb=20240309195916",
    },
    {
      name: "R-63 Diligence",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c8/Screenshot_2024-03-09_115105.png/revision/latest/scale-to-width-down/128?cb=20240309195129",
    },
    {
      name: "R63CS Diligence Counter Sniper",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2d/Screenshot_2024-03-09_115027.png/revision/latest/scale-to-width-down/127?cb=20240309195052",
    },
    {
      name: "BR-14 Adjudicator",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/6d/BR-14_Adjudicator.png/revision/latest/scale-to-width-down/180?cb=20240413045539",
    },
    {
      name: "LAS-5 Scythe",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/09/Screenshot_2024-03-09_115213.png/revision/latest/scale-to-width-down/128?cb=20240309195230",
    },
    {
      name: "LAS-16 Sickle",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/64/LAS16_Sickle.png/revision/latest/scale-to-width-down/128?cb=20240315150554",
    },
    {
      name: "PLAS-1 Scorcher",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/36/PLAS1scorcher.png/revision/latest/scale-to-width-down/128?cb=20240407234415",
    },
    {
      name: "SG-8P Punisher Plasma",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/30/SG8PpunisherPlasma.png/revision/latest/scale-to-width-down/128?cb=20240408180645",
    },
    {
      name: "ARC-12 Blitzer",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/0d/ARC-12_Blitzer_Render.png/revision/latest/scale-to-width-down/128?cb=20240406201952",
    },
    {
      name: "JAR-5 Dominator",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/cf/Screenshot_2024-03-09_113350.png/revision/latest/scale-to-width-down/128?cb=20240309193404",
    },
    {
      name: "R-36 Eruptor",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/60/R-36_Eruptor.png/revision/latest/scale-to-width-down/180?cb=20240413050637",
    },
  ],
  sidearm: [
    {
      name: "P-2 Peacemaker",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a7/P-2_Peacemaker_HB2.png/revision/latest/scale-to-width-down/128?cb=20240306141454",
    },
    {
      name: "P-19 Redeemer",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/0d/P-19_Redeemer_HB2.png/revision/latest/scale-to-width-down/128?cb=20240306141613",
    },
    {
      name: "P-4 Senator",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/62/P-4_Senator_BH2.png/revision/latest/scale-to-width-down/128?cb=20240306141812",
    },
    {
      name: "LAS-7 Dagger",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/f1/LAS7dagger.png/revision/latest/scale-to-width-down/128?cb=20240408180318",
    },
  ],
  grenade: [
    {
      name: "G-6 Frag",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/9e/Screenshot_2024-03-09_120157.png/revision/latest/scale-to-width-down/127?cb=20240309200214",
    },
    {
      name: "G-12 High Explosive",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a0/Screenshot_2024-03-09_120246.png/revision/latest/scale-to-width-down/128?cb=20240309200322",
    },
    {
      name: "G-10 Incediary",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/0e/Screenshot_2024-03-09_120347.png/revision/latest/scale-to-width-down/127?cb=20240309200403",
    },
    {
      name: "G-3 Smoke",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/40/Screenshot_2024-03-09_120558.png/revision/latest/scale-to-width-down/128?cb=20240309200615",
    },
    {
      name: "G-23 Stun",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/71/G23Stun.png/revision/latest/scale-to-width-down/145?cb=20240414052323",
    },
  ],
  stratagem: [
    {
      name: 'AX/LAS-5 "Guard Dog" Rover',
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c2/AX-LAS-5icon.png/revision/latest/scale-to-width-down/40?cb=20240225211338",
    },
    {
      name: 'AX/AR-23 "Guard Dog"',
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/ab/AX-AR-23icon.png/revision/latest/scale-to-width-down/40?cb=20240225211303",
    },
    {
      name: "LIFT-850 Jump Pack",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/56/LIFT-850icon.png/revision/latest/scale-to-width-down/40?cb=20240225211732",
    },
    {
      name: "B-1 Supply Pack",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/0f/B-1icon.png/revision/latest/scale-to-width-down/40?cb=20240225211656",
    },
    {
      name: "SH-32 Shield Generator Pack",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/ec/SH-32icon.png/revision/latest/scale-to-width-down/40?cb=20240225211446",
    },
    {
      name: "SH-20 Ballistic Shield Backpack",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/49/SH-20icon.png/revision/latest/scale-to-width-down/40?cb=20240225211556",
    },
    {
      name: "AC-8 Autocannon",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d4/AC-8icon.png/revision/latest/scale-to-width-down/40?cb=20240225205456",
    },
    {
      name: "EAT-17 Expendable Anti-tank",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/46/EAT-17icon.png/revision/latest/scale-to-width-down/40?cb=20240225205534",
    },
    {
      name: "FLAM-40 Flamethrower",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2b/FLAM-40icon.png/revision/latest/scale-to-width-down/40?cb=20240225205256",
    },
    {
      name: "LAS-98 Laser Cannon",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d5/LAS-98icon.png/revision/latest/scale-to-width-down/40?cb=20240225210440",
    },
    {
      name: "M-105 Stalwart",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/46/M-105icon.png/revision/latest/scale-to-width-down/40?cb=20240225205851",
    },
    {
      name: "MG-43 Machine Gun",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/MG-43icon.png/revision/latest/scale-to-width-down/40?cb=20240225205334",
    },
    {
      name: "ARC-3 Arc Thrower",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/4a/ARC-3icon.png/revision/latest/scale-to-width-down/40?cb=20240225210254",
    },
    {
      name: "GL-21 Grenade Launcher",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5d/GL-21icon.png/revision/latest/scale-to-width-down/40?cb=20240225210608",
    },
    {
      name: "APW-1 Anti-Materiel Rifle",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/b/b0/APW-1icon.png/revision/latest/scale-to-width-down/40?cb=20240225205808",
    },
    {
      name: "RS-422 Railgun",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/70/RS-422icon.png/revision/latest/scale-to-width-down/40?cb=20240225205727",
    },
    {
      name: "GR-8 Recoilless Rifle",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2a/GR-8icon.png/revision/latest/scale-to-width-down/40?cb=20240225205418",
    },
    {
      name: "FAF-14 SPEAR Launcher",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fc/FAF-14icon.png/revision/latest/scale-to-width-down/40?cb=20240225205631",
    },
    {
      name: "LAS-99 Quasar Cannon",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/7e/LAS99Icon.png/revision/latest/scale-to-width-down/40?cb=20240328223954",
    },
    {
      name: "MG-206 Heavy Machine Gun",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/f5/MG206Icon.png/revision/latest/scale-to-width-down/40?cb=20240328223944",
    },
    {
      name: "EXO-45 Patriot Exosuit",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/86/EXO45icon.png/revision/latest/scale-to-width-down/40?cb=20240309004719",
    },
    {
      name: "A/ARC-3 Tesla Tower",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/ac/Teslaicon.png/revision/latest/scale-to-width-down/40?cb=20240226105436",
    },
    {
      name: "A/M-12 Mortar Sentry",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5e/Mortarsentryicon.png/revision/latest/scale-to-width-down/40?cb=20240226105506",
    },
    {
      name: "A/M-23 EMS Mortar Sentry",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/27/EMSmortaricon.png/revision/latest/scale-to-width-down/40?cb=20240226105541",
    },
    {
      name: "A/MG-43 Machine Gun Sentry",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/88/MGsentryicon.png/revision/latest/scale-to-width-down/40?cb=20240226105619",
    },
    {
      name: "A/G-16 Gatling Sentry",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e3/Gatlingsentryicon.png/revision/latest/scale-to-width-down/40?cb=20240226105650",
    },
    {
      name: "MD-6 Anti-Personnel Minefield",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5d/Minefieldicon.png/revision/latest/scale-to-width-down/40?cb=20240226105711",
    },
    {
      name: "MD-I4 Incendiary Mines",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/7f/Fireminefieldicon.png/revision/latest/scale-to-width-down/40?cb=20240226105731",
    },
    {
      name: "FX-12 Shield Generator Relay",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c7/Shieldrelayicon.png/revision/latest/scale-to-width-down/40?cb=20240226105758",
    },
    {
      name: "E/MG-101 HMG Emplacement",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d0/HMGTurreticon.png/revision/latest/scale-to-width-down/40?cb=20240226105841",
    },
    {
      name: "A/AC-8 Autocannon Sentry",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/b/ba/Autocannoasentryicon.png/revision/latest/scale-to-width-down/40?cb=20240226105858",
    },
    {
      name: "A/MLS-4X Rocket Sentry",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/3b/Missilesentryicon.png/revision/latest/scale-to-width-down/40?cb=20240226105915",
    },
    {
      name: "Orbital Precision Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/6d/OrbitalPrecisionicon.png/revision/latest/scale-to-width-down/40?cb=20240226110325",
    },
    {
      name: "Orbital Airburst Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e6/OrbitalAirbursticon.png/revision/latest/scale-to-width-down/40?cb=20240226110343",
    },
    {
      name: "Orbital 120MM HE Barrage",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/1/1a/Orbital120icon.png/revision/latest/scale-to-width-down/40?cb=20240226110404",
    },
    {
      name: "Orbital 380MM HE Barrage",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fb/Orbital380icon.png/revision/latest/scale-to-width-down/40?cb=20240226110425",
    },
    {
      name: "Orbital Walking Barrage",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2b/OrbitalWalkingicon.png/revision/latest/scale-to-width-down/40?cb=20240226110538",
    },
    {
      name: "Orbital Laser",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/74/OrbitalLasericon.png/revision/latest/scale-to-width-down/40?cb=20240226110601",
    },
    {
      name: "Orbital Railcannon Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e0/OrbitalRailcannonicon.png/revision/latest/scale-to-width-down/40?cb=20240226110624",
    },
    {
      name: "Orbital Gatling Barrage",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2b/OrbitalGatlingicon.png/revision/latest/scale-to-width-down/40?cb=20240226110706",
    },
    {
      name: "Orbital Gas Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/36/OrbitalGasicon.png/revision/latest/scale-to-width-down/40?cb=20240226110721",
    },
    {
      name: "Orbital EMS Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/1/12/OrbitalEMSicon.png/revision/latest/scale-to-width-down/40?cb=20240226110739",
    },
    {
      name: "Orbital Smoke Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/ef/OrbitalSmokeicon.png/revision/latest/scale-to-width-down/40?cb=20240226110759",
    },
    {
      name: "Eagle Strafing Run",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/4d/EagleStrafingicon.png/revision/latest/scale-to-width-down/40?cb=20240226110818",
    },
    {
      name: "Eagle Airstrike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/94/EagleAirstrikeicon.png/revision/latest/scale-to-width-down/40?cb=20240226105942",
    },
    {
      name: "Eagle Cluster Bomb",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/79/EagleClusterbombicon.png/revision/latest/scale-to-width-down/40?cb=20240226105957",
    },
    {
      name: "Eagle Napalm Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png/revision/latest/scale-to-width-down/40?cb=20240226110016",
    },
    {
      name: "Eagle Smoke Strike",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/00/EagleSmokeicon.png/revision/latest/scale-to-width-down/40?cb=20240226110035",
    },
    {
      name: "Eagle 110MM Rocket Pods",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fd/EagleRocketpodicon.png/revision/latest/scale-to-width-down/40?cb=20240226110050",
    },
    {
      name: "Eagle 500kg Bomb",
      image:
        "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2d/Eagle500icon.png/revision/latest/scale-to-width-down/40?cb=20240226110107",
    },
  ],
};

export function GetRandomItem(category: ItemCategory) {
  return items[category][Math.floor(Math.random() * items[category].length)];
}
