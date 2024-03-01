import css from "./Controls.module.scss";

interface IControlsProps {
  setFilterTerm: (term: string) => void;
}

export const Controls = ({ setFilterTerm }: IControlsProps) => (
  <div className={css.controls}>
    <fieldset>
      <legend>Type to filter</legend>
      <input
        type="text"
        onChange={(e) => setFilterTerm(e.target.value)}
        placeholder="Start typing to filter..."
      />
    </fieldset>
  </div>
);
