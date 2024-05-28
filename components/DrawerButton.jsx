"import";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const DragCloseDrawerExample = ({ open, setOpen, content }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (open) {
      setIsRendered(true);
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {isRendered && open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br bg-green-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-center mb-2">
                  Ссылки на работы
                </h3>
                <div className="text-center mb-6">{content}</div>
                <div className="flex gap-2">
                  <button
                    onClick={handleClose}
                    className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                  >
                    Обратно
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DragCloseDrawerExample;
