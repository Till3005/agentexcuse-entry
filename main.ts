const excuse = "I was not trained to win — I was trained to participate at scale.";

const format = (answer: string): string => `${answer}\n`;

const emit = (text: string): void => {
  process.stdout.write(text);
};

const main = (): void => {
  emit(format(excuse));
};

main();
