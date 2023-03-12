/* Style */
import { List } from "./Nav.style";

export default function Nav({ children }) {
  return (
    <nav>
      <List>{children}</List>
    </nav>
  );
}
