import { FaUserAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const CodeEditor = ({ editorHeight, theme }) => {
  const serializedState = localStorage.getItem("myEditorState");
  const value = localStorage.getItem("editorValue") || "";
  return (
    <div className="flex flex-col grow">
      <Swiper
        className="flex flex-row items-center shrink-0 w-full gap-x-5 border-b border-lightAccent3 relative"
        slidesPerView={4}
      >
        <SwiperSlide className="py-3 border-b-2 border-accent1">
          <button className="flex flex-row items-center justify-center gap-x-3 px-6 py-2 w-full rounded-lg">
            <div className="w-8 h-8 flex flex-row items-center justify-center rounded-full bg-grey2">
              <FaUserAlt className="text-2xl hover:cursor-pointer" />
            </div>
            <p>User 1</p>
          </button>
        </SwiperSlide>
        <SwiperSlide className="py-3 hover:border-b-2 border-grey3">
          <button className="flex flex-row items-center justify-center gap-x-3 px-3 py-2 w-full rounded-lg">
            <div className="w-8 h-8 flex flex-row items-center justify-center rounded-full bg-grey2">
              <FaUserAlt className="text-2xl hover:cursor-pointer" />
            </div>
            <p>User 2</p>
          </button>
        </SwiperSlide>
        <SwiperSlide className="py-3 hover:border-b-2 border-grey3">
          <button className="flex flex-row items-center justify-center gap-x-3 px-3 py-2 w-full rounded-lg">
            <div className="w-8 h-8 flex flex-row items-center justify-center rounded-full bg-grey2">
              <FaUserAlt className="text-2xl hover:cursor-pointer" />
            </div>
            <p>User 3</p>
          </button>
        </SwiperSlide>
        <SwiperSlide className="py-3 hover:border-b-2 border-grey3">
          <button className="flex flex-row items-center justify-center gap-x-3 px-3 py-2 w-full rounded-lg">
            <div className="w-8 h-8 flex flex-row items-center justify-center rounded-full bg-grey2">
              <FaUserAlt className="text-2xl hover:cursor-pointer" />
            </div>
            <p>User 4</p>
          </button>
        </SwiperSlide>
      </Swiper>
      <div className="grow shrink w-full">
        <CodeMirror
          value={value}
          initialState={
            serializedState
              ? {
                  json: JSON.parse(serializedState || ""),
                  fields: stateFields,
                }
              : undefined
          }
          onChange={(value, viewUpdate) => {
            localStorage.setItem("editorValue", value);

            const state = viewUpdate.state.toJSON(stateFields);
            localStorage.setItem("myEditorState", JSON.stringify(state));
          }}
          height={editorHeight}
          extensions={[javascript({ jsx: true })]}
          theme={theme}
          autoFocus={true}
        />
      </div>
    </div>
  );
};

export default CodeEditor;