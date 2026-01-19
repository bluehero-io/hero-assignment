import { redirect } from "next/navigation";

/**
 * Redirect to the default locale.
 */
export default function IndexPage() {
  redirect("/en");
}
