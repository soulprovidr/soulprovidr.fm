import { DisplayMode } from "../types";
import css from "./Controls.module.scss";

interface IControlsProps {
  displayMode: "grid" | "list";
  setDisplayMode: (mode: DisplayMode) => void;
  setFilterTerm: (term: string) => void;
}

export const Controls = ({
  displayMode,
  setDisplayMode,
  setFilterTerm,
}: IControlsProps) => (
  <div className={css.controls}>
    <fieldset>
      <legend>Filter</legend>
      <input
        autoFocus
        type="text"
        onChange={(e) => setFilterTerm(e.target.value)}
        placeholder="Start typing to filter..."
      />
    </fieldset>
    <fieldset>
      <legend>Display Mode</legend>
      <input
        aria-checked={displayMode === DisplayMode.GRID}
        aria-label="grid"
        checked={displayMode === DisplayMode.GRID}
        id="grid"
        name="display"
        onChange={(e) => e.target.checked && setDisplayMode(DisplayMode.GRID)}
        type="checkbox"
      />
      <input
        aria-checked={displayMode === DisplayMode.LIST}
        aria-label="list"
        checked={displayMode === DisplayMode.LIST}
        className={css.checkbox}
        id="list"
        name="display"
        onChange={(e) => e.target.checked && setDisplayMode(DisplayMode.LIST)}
        type="checkbox"
      />
    </fieldset>
  </div>
);
