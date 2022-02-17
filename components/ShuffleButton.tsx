import { IoShuffle } from "react-icons/io5";

export default function ShuffleButton() {
  return (
    <button type="submit" className="button-submit mt-3 ">
      <div className="flex items-center space-x-1">
        <div>Acak</div>
        <IoShuffle className="h-6 w-6" />
      </div>
    </button>
  );
}
