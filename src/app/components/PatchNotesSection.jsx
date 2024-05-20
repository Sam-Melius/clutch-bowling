import PatchNoteCard from "./PatchNoteCard";

export default function PatchNotesSection({ patchNotesData }) {
  return (
    <section
      id="patch-notes"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 px-5 md:px-10 pt-10 pb-20 relative"
    >
      {patchNotesData.map((patch, index) => (
        <div key={index}>
          <PatchNoteCard patchData={patch} />
        </div>
      ))}
    </section>
  );
}
