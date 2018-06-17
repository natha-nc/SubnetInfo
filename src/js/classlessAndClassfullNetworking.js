export const getClass = (_ip = 0) => {
  let ip = _ip.split(".")[0];

  if (ip >= 1 && ip <= 126) return "A";
  else if (ip === 127) return "Loop Back | Reserved";
  else if (ip >= 128 && ip <= 191) return "B";
  else if (ip >= 192 && ip <= 223) return "C";
  else return null;
};
export const getMask = (mask = 0) => {
  const _O1 = octet(mask.split(".")[0]);
  const _O2 = octet(mask.split(".")[1]);
  const _O3 = octet(mask.split(".")[2]);
  const _O4 = octet(mask.split(".")[3]);

  return _O1 + _O2 + _O3 + _O4;
};
export const octet = (_octet = 0) => {
  const octet = Number(_octet);

  switch (octet) {
    case 0:
      return 0;
    case 128:
      return 1;
    case 192:
      return 2;
    case 224:
      return 3;
    case 240:
      return 4;
    case 248:
      return 5;
    case 252:
      return 6;
    case 254:
      return 7;
    case 255:
      return 8;
    default:
      return false;
  }
};
export const networkBits = (_ip = 0) => {
  let ip = Number(_ip.split(".")[0]);

  if (ip >= 1 && ip <= 126) return 8;
  else if (ip >= 128 && ip <= 191) return 16;
  else if (ip >= 192 && ip <= 223) return 24;
  else return null;
};
export const subnetBits = (P = 0, N = 0) => {
  const subnet = P - N;
  return subnet;
};
export const calculateHostBits = (P = 0) => {
  return 32 - P;
};
export const hostToSubnets = (H = 0) => {
  return Math.pow(2, H) - 2;
};
export const subnets = S => {
  return Math.pow(2, S);
};

export const ipToBinary = (_mask = 0) => {
  const mask = _mask.split(".");
  const mask0 = toBinary(mask[0]);
  const mask1 = toBinary(mask[1]);
  const mask2 = toBinary(mask[2]);
  const mask3 = toBinary(mask[3]);

  return [mask0, mask1, mask2, mask3].join(" ");
};
const toBinary = (mask = 0) => {
  switch (mask) {
    case "0":
      return "00000000";
    case "168":
      return "10000000";
    case "192":
      return "11000000";
    case "224":
      return "11100000";
    case "240":
      return "11110000";
    case "248":
      return "11111000";
    case "252":
      return "11111100";
    case "254":
      return "11111110";
    case "255":
      return "11111111";
    default:
      return null;
  }
};

const calculateNetIDs = (mask, ip) => {
  const mg = 256 - mask;
  let _networks = [];
  let num = 0;

  while (num <= ip) {
    _networks.push(num);
    num += mg;
  }
  return _networks.pop();
};

const calculateBroadcastID = (mask, ip) => {
  const mg = 256 - mask;
  console.log("magic number :" + mg);
  let _networks = [];
  let num = 0;

  while (num <= ip) {
    _networks.push(num);
    num += mg;
  }
  _networks.push(num - 1);
  console.log("networks: " + _networks);
  return _networks[_networks.length - 1];
};

export const getNetworkID = (_ip, _mask) => {
  let networkID = [];

  _mask.split(".").forEach((mask, index) => {
    if (mask === "255") {
      networkID.push(_ip.split(".")[index]);
    } else if (mask === "0") {
      networkID.push("0");
    } else {
      networkID.push(calculateNetIDs(mask, _ip.split(".")[index]));
    }
  });
  return networkID.join(".");
};

export const getBroadcastID = (_ip, _mask) => {
  let broadcastID = [];

  _mask.split(".").forEach((mask, index) => {
    if (mask === "255") {
      broadcastID.push(_ip.split(".")[index]);
    } else if (mask === "0") {
      broadcastID.push("255");
    } else {
      broadcastID.push(calculateBroadcastID(mask, _ip.split(".")[index]));
    }
  });
  return broadcastID.join(".");
};
