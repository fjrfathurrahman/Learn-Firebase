import RootLayouts from "../components/layouts/RootLayouts";

const PARAGRAPH_ITEMS = [
  "Saya sedang ngoding sambil mendalami Firebase dan berbagai hooks di React. Proses ini sangat menarik karena Firebase menyediakan berbagai fitur backend yang memungkinkan pengembangan aplikasi lebih cepat dan efisien.",
  "Saya telah menambahkan fitur untuk menampilkan, menambah, memperbarui, dan menghapus data. Fitur-fitur ini membuat aplikasi saya lebih interaktif dan dinamis, serta memberikan pemahaman yang lebih dalam tentang bagaimana mengintegrasikan Firebase dengan React untuk operasi CRUD (Create, Read, Update, Delete)."
]

export default function App() {
  return (
    <RootLayouts>
      <div className="space-y-3">
        <h1 className="text-2xl font-medium">Welcome to Learn Firebase.</h1>
        {PARAGRAPH_ITEMS.map((paragraph) => (
          <p className="text-pretty tracking-wider text-sm" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </RootLayouts>
  );
}
