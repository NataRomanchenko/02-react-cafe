import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

type Props = {
  onVote: (type: VoteType | "reset") => void;
  canReset: boolean;
};

export default function VoteOptions({ onVote, canReset }: Props) {
  return (
    <div className={css.options}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>

      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>

      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>

      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={() => onVote("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
}