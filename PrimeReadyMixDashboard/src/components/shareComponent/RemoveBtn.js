"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RemoveBtn({ id, endPoints }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/${endPoints}?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
      toast(`${endPoints} meta data successfully deleted.`);
      router.push(`/dashboard/allpages/${endPoints}`);
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
