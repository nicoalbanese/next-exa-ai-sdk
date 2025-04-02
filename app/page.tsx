"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, error } = useChat({
    maxSteps: 5,
  });
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col w-full max-w-xl py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map((m) =>
          m.parts.map((p, i) => {
            switch (p.type) {
              case "text":
                return (
                  <div key={i} className="whitespace-pre-wrap">
                    <div>
                      <div className="font-bold">{m.role}</div>
                      <p>{p.text}</p>
                    </div>
                  </div>
                );
              case "tool-invocation":
                const { state, args, toolName } = p.toolInvocation;
                return (
                  <div key={i} className="whitespace-pre-wrap">
                    <div>
                      <div className="font-bold">{m.role}</div>
                      {state === "result" ? "Called" : "Calling"} {toolName}
                      <div className="mt-2">
                        <div className="font-semibold">Args</div>
                        <div className="border-t border-gray-300 mt-1 pt-1">
                          <pre>{JSON.stringify(args, null, 2)}</pre>
                        </div>
                      </div>
                      {state === "result" && (
                        <div className="mt-2">
                          <div className="font-semibold">Results</div>
                          <div className="border-t border-gray-300 mt-1 pt-1 overflow-x-clip">
                            <pre>
                              {JSON.stringify(p.toolInvocation.result, null, 2)}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              default:
                return null;
            }
          }),
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
