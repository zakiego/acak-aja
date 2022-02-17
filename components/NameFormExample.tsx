import { mockName } from "./Mock";

export default function NameFormExample() {
  return (
    <div>
      {/* form name */}
      <label htmlFor="name" className="text-xl font-medium">
        Nama
      </label>
      <textarea
        id="name"
        name="name"
        rows={10}
        disabled={true}
        defaultValue={mockName}
        className="input-primary disable mt-3"
        placeholder="Masukkan daftar nama di sini, pisahkan dengan enter"
      ></textarea>
      <div className="mt-3">Kamu memasukkan {16} nama</div>
    </div>
  );
}
