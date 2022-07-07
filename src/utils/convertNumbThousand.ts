export default function convertNumbThousand(num: number): string {
  const a =
    Math.abs(num) > 999
      ? // @ts-ignore
        Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  return a.toString();
}
