import Nav from "@/app/components/Nav";
import Footer from "../components/Footer";

export default function services() {
  return (
    <div className="flex gap-10 flex-col">
      <Nav />
      <h1 className="text-2xl font-semibold tracking-tight">Services</h1>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <p>Haircut</p>
          <p>$20 and up</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Perm (Permanent)</p>
          <p>$90 and up</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Straighten</p>
          <p>$150 and up</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Colour</p>
          <p>$90 and up</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Hightlight</p>
          <p>$140 and up</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Shampoo</p>
          <p>$15 and up</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Makeup | Updo</p>
          <p>$55 and up</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p>Tattoo |</p>
            <p className="pl-2 font-light">Eyebrows, Eyelids, Lips</p>
          </div>
          <p>Please Contact</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
