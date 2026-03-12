import css from "./Notification.module.css";

type Props = {
  message: string;
};

export default function Notification({ message }: Props) {
  return <p className={css.message}>{message}</p>;
}