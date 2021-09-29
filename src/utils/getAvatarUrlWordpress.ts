export default function getAvatarUrlDefaultWordpress(
  defaultUrl?: string,
  ncUrl?: string
) {
  if (!defaultUrl) {
    return ncUrl || "";
  }
  if (defaultUrl && defaultUrl.includes("gravatar.com/avatar/")) {
    return ncUrl || "";
  }
  if (defaultUrl && !defaultUrl.includes("gravatar.com/avatar/")) {
    return defaultUrl;
  }
}
