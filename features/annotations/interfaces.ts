interface Headset {
  name: string;
  price: number;
  isWorking: boolean;
  logger(): string;
}

const headset = {
  name: 'Steelseries Artics Pro',
  price: 300,
  isWorking: true,
  logger(): string {
    return `${headset.name} ${headset.price} ${headset.isWorking}`;
  },
};

const logHeadset = (headset: Headset): void => {
  console.log(headset.logger());
};

logHeadset(headset);
