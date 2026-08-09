import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
  reset,
} from "./redux/CounterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const getCounterColor = () => {
    if (counter === 0) {
      return {
        color: "#fde047",
        textShadow: "0 0 8px rgba(250, 204, 21, 0.35)",
      };
    }
    const hue = Math.abs(counter * 35) % 360;

    return {
      color: `hsl(${hue}, 90%, 65%)`,
      textShadow: `0 0 8px hsla(${hue}, 90%, 65%, 0.35)`,
    };
  };

  const counterColor = getCounterColor();

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden

        bg-[#020617]

        px-4
        py-8
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full

          bg-cyan-500/20
          blur-[120px]

          animate-[ambientFloat_8s_ease-in-out_infinite]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-96
          w-96
          rounded-full

          bg-fuchsia-600/20
          blur-[120px]

          animate-[ambientFloat_8s_ease-in-out_infinite_reverse]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-72
          w-72

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-blue-500/10
          blur-[100px]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.06]

          bg-[linear-gradient(rgba(34,211,238,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.4)_1px,transparent_1px)]

          bg-[size:60px_60px]

          animate-[gridMove_18s_linear_infinite]
        "
      />
      <section
        className="
          group
          relative
          z-10

          w-full
          max-w-xl

          overflow-hidden

          rounded-[2rem]

          border
          border-cyan-400/20

          bg-slate-900/60

          p-6
          sm:p-10

          text-center

          backdrop-blur-2xl

          shadow-[0_0_40px_rgba(6,182,212,0.08)]

          transition-all
          duration-500

          hover:border-cyan-400/30
          hover:shadow-[0_0_60px_rgba(6,182,212,0.12)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
            rounded-[2rem]
          "
        >
          <div
            className="
              absolute
              left-0
              top-0

              h-full
              w-1/3

              -translate-x-[120%]
              skew-x-[-20deg]

              bg-gradient-to-r
              from-transparent
              via-white/[0.05]
              to-transparent

              transition-transform
              duration-1000

              group-hover:translate-x-[400%]
            "
          />
        </div>
        <div
          className="
            absolute
            left-1/2
            top-0

            h-[2px]
            w-1/2

            -translate-x-1/2

            rounded-full

            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent

            shadow-[0_0_15px_rgba(34,211,238,0.8)]
          "
        />
        <div className="relative z-10 mb-8">
          <p
            className="
              mb-3

              text-xs
              sm:text-sm

              font-semibold

              uppercase
              tracking-[0.4em]

              text-cyan-400

              drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
            "
          >
            Redux Toolkit / Counter
          </p>

          <h1
            className="
              text-2xl
              sm:text-4xl

              font-black

              tracking-tight

              text-white

              drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]
            "
          >
            Your Number Counting
          </h1>
        </div>

        <div
          className="
            group/counter
            relative

            mx-auto
            mb-10

            flex
            h-36
            w-36

            sm:h-48
            sm:w-48

            items-center
            justify-center

            rounded-full

            border
            border-cyan-400/20

            bg-slate-950

            shadow-[0_0_25px_rgba(6,182,212,0.08)]

            transition-all
            duration-500

            hover:scale-105
            hover:border-cyan-400/40
            hover:shadow-[0_0_35px_rgba(6,182,212,0.12)]

            animate-[counterGlow_4s_ease-in-out_infinite]
          "
        >
          <div
            className="
              pointer-events-none
              absolute

              h-28
              w-28

              sm:h-40
              sm:w-40

              rounded-full

              border
              border-white/[0.04]
            "
          />
          <span
            key={counter}
            style={counterColor}
            className="
              relative
              z-10

              text-5xl
              sm:text-7xl

              font-black

              tracking-tight

              transition-all
              duration-300
              ease-out

              animate-[counterPop_0.35s_ease-out]
            "
          >
            {counter}
          </span>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => dispatch(increament(1))}
            className="
              min-w-[90px]

              rounded-xl

              border
              border-cyan-400/30

              bg-cyan-400/5

              px-5
              py-3

              font-bold
              text-cyan-300

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:brightness-125

              hover:border-cyan-400/70
              hover:bg-cyan-400/10

              hover:text-cyan-200

              hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]

              active:translate-y-1
              active:scale-[0.92]
              active:shadow-none
              active:duration-75

              cursor-pointer
              select-none
            "
          >
            +1
          </button>
          <button
            onClick={() => dispatch(decreament(1))}
            className="
              min-w-[90px]

              rounded-xl

              border
              border-rose-400/30

              bg-rose-400/5

              px-5
              py-3

              font-bold
              text-rose-300

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:brightness-125

              hover:border-rose-400/70
              hover:bg-rose-400/10

              hover:text-rose-200

              hover:shadow-[0_0_25px_rgba(251,113,133,0.3)]

              active:translate-y-1
              active:scale-[0.92]
              active:shadow-none
              active:duration-75

              cursor-pointer
              select-none
            "
          >
            -1
          </button>
          <button
            onClick={() => dispatch(increamentByAmount(5))}
            className="
              min-w-[90px]

              rounded-xl

              border
              border-blue-400/30

              bg-blue-400/5

              px-5
              py-3

              font-bold
              text-blue-300

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:brightness-125

              hover:border-blue-400/70
              hover:bg-blue-400/10

              hover:text-blue-200

              hover:shadow-[0_0_25px_rgba(96,165,250,0.3)]

              active:translate-y-1
              active:scale-[0.92]
              active:shadow-none
              active:duration-75

              cursor-pointer
              select-none
            "
          >
            +5
          </button>
          <button
            onClick={() => dispatch(increamentByAmount(-5))}
            className="
              min-w-[90px]

              rounded-xl

              border
              border-orange-400/30

              bg-orange-400/5

              px-5
              py-3

              font-bold
              text-orange-300

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:brightness-125

              hover:border-orange-400/70
              hover:bg-orange-400/10

              hover:text-orange-200

              hover:shadow-[0_0_25px_rgba(251,146,60,0.3)]

              active:translate-y-1
              active:scale-[0.92]
              active:shadow-none
              active:duration-75

              cursor-pointer
              select-none
            "
          >
            -5
          </button>
          <button
            onClick={() => dispatch(increamentByAmount(10))}
            className="
              min-w-[90px]

              rounded-xl

              border
              border-violet-400/30

              bg-violet-400/5

              px-5
              py-3

              font-bold
              text-violet-300

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:brightness-125

              hover:border-violet-400/70
              hover:bg-violet-400/10

              hover:text-violet-200

              hover:shadow-[0_0_25px_rgba(167,139,250,0.3)]

              active:translate-y-1
              active:scale-[0.92]
              active:shadow-none
              active:duration-75

              cursor-pointer
              select-none
            "
          >
            +10
          </button>
          <button
            onClick={() => dispatch(increamentByAmount(-10))}
            className="
              min-w-[90px]

              rounded-xl

              border
              border-fuchsia-400/30

              bg-fuchsia-400/5

              px-5
              py-3

              font-bold
              text-fuchsia-300

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:brightness-125

              hover:border-fuchsia-400/70
              hover:bg-fuchsia-400/10

              hover:text-fuchsia-200

              hover:shadow-[0_0_25px_rgba(232,121,249,0.3)]

              active:translate-y-1
              active:scale-[0.92]
              active:shadow-none
              active:duration-75

              cursor-pointer
              select-none
            "
          >
            -10
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="
              basis-full
              sm:basis-auto

              mt-2

              rounded-xl

              border
              border-white/10

              bg-white/[0.03]

              px-8
              py-3

              font-bold
              text-slate-300

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-105
              hover:brightness-125

              hover:border-white/30
              hover:bg-white/[0.08]

              hover:text-white

              hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]

              active:translate-y-1
              active:scale-[0.92]
              active:shadow-none
              active:duration-75

              cursor-pointer
              select-none
            "
          >
            RESET
          </button>
        </div>
        <div
          className="
            absolute
            bottom-0
            left-1/2

            h-[2px]
            w-1/3

            -translate-x-1/2

            rounded-full

            bg-gradient-to-r
            from-transparent
            via-fuchsia-400
            to-transparent

            shadow-[0_0_15px_rgba(232,121,249,0.8)]
          "
        />
      </section>
    </main>
  );
}

export default App;
