import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
 

    return (
        <>
            <Head title="Welcome" />                    
<body>
  {/* <!-- Navigation --> */}
  <nav class="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
    <div class="flex items-center">
      <img src='dist/assets/Logo_black.svg' alt="Logo" class="h-4" />
    </div>


    <div class="font-montserrat hidden md:block">
      {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md py-2 px-4 text-white bg-black rounded-3xl ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}

    </div>
    <div id="showMenu" class="md:hidden">
      <img src='dist/assets/logos/Menu.svg' alt="Menu icon" />
    </div>
  </nav>
  <div id='mobileNav' class="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down">
    <div id="hideMenu" class="flex justify-end">
      <img src='dist/assets/logos/Cross.svg' alt="" class="h-16 w-16" />
    </div>
    <ul class="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
      <li class="my-6">
        <a href="howitworks">How it works</a>
      </li>
      <li class="my-6">
        <a href="features">Features</a>
      </li>
      <li class="my-6">
        <a href="pricing">Pricing</a>
      </li>
    </ul>
  </div>

  {/* <!-- Hero --> */}
  <section
    class="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
    <div class="md:flex-1 md:mr-10">
      <h1 class="font-pt-serif text-5xl font-bold mb-7">
        A headline for your
        <span class="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
          cool website
        </span>
      </h1>
      <p class="font-pt-serif font-normal mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
        tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
      </p>
      <div class="font-montserrat">
        <button class="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
          Call to action
        </button>
        <button class="px-6 py-4 border-2 border-black border-solid rounded-lg">
          Secondary action
        </button>
      </div>
    </div>
    <div class="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      <div class="relative">
        <img src='dist/assets/Highlight1.svg' alt="" class="absolute -top-16 -left-10" />
      </div>
      <img src='dist/assets/MacBook Pro.png' alt="Macbook" />
      <div class="relative">
        <img src='dist/assets/Highlight2.svg' alt="" class="absolute -bottom-10 -right-6" />
      </div>
    </div>
  </section>

  {/* <!-- How it works --> */}
  <section class="bg-black text-white sectionSize">
    <div>
      <h2 class="secondaryTitle bg-underline2 bg-100%">How it works</h2>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="flex-1 mx-8 flex flex-col items-center my-4">
        <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          1
        </div>
        <h3 class="font-montserrat font-medium text-xl mb-2">Eat</h3>
        <p class="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="flex-1 mx-8 flex flex-col items-center my-4">
        <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          2
        </div>
        <h3 class="font-montserrat font-medium text-xl mb-2">Sleep</h3>
        <p class="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="flex-1 mx-8 flex flex-col items-center my-4">
        <div class="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          3
        </div>
        <h3 class="font-montserrat font-medium text-xl mb-2">Rave</h3>
        <p class="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </section>

  {/* <!-- Features --> */}
  <section class="sectionSize bg-secondary">
    <div>
      <h2 class="secondaryTitle bg-underline3 bg-100%">Features</h2>
    </div>
    <div class="md:grid md:grid-cols-2 md:grid-rows-2">

      <div class="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' class="h-7 mr-4" />
        <div>
          <h3 class="font-semibold text-2xl">Feature #1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div class="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' class="h-7 mr-4" />
        <div>
          <h3 class="font-semibold text-2xl">Feature #2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div class="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' class="h-7 mr-4" />
        <div>
          <h3 class="font-semibold text-2xl">Feature #3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div class="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' class="h-7 mr-4" />
        <div>
          <h3 class="font-semibold text-2xl">Feature #4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

    </div>
  </section>
    </body>
</>
);
}
