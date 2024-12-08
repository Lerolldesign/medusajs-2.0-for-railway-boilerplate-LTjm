import Link from "next/link"
import React from "react"
import Accordion from "../../common/components/accordeon"

const StepRestaurer: React.FC = () => {
  return (
    <div className="bg-creamy noise px-3 md:px-24 lg:px-40 pb-32 relative top-36 md:top-52">
      <div className="flex flex-col items-center">
        <h3 className="text-lune  px-[10vw] text-center font-lune text-[2.1rem] leading-9 mb:text-[3.5rem] xl:text-6xl 2xl:text-8xl relative flex flex-col">
          Comment se déroule un chantier ?
        </h3>
        <p
          className="text-gray-600 md:px-5 lg:px-28 2xl:left-10 mx-10 md:mx-10 xl:mx-24 2xl:px-32 py-10 md:py-20  relative
         leading-6 2xl:leading-7 
         text-[.85rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem] text-center"
        >
          Que ce soit pour la création d&apos; un abat-jour,la confections de
          vos décors textiles, ou la restauration d&apos;un siège, voici comment
          se déroulera votre chantier
        </p>
      </div>

      <Accordion title="Prise de contact ">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Nous échangerons par téléphone ou mail pour déterminer la nature de
          votre projet. L&apos;envoi d&apos;une photo peut me permettre de faire
          une 1<sup>ère</sup>
          évaluation. A ce moment nous prendrons rendez-vous.
        </p>
      </Accordion>

      <Accordion title="Premier rendez-vous">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Nous nous rencontrerons pour ce 1<sup>er</sup> rendez-vous soit à
          l&apos;atelier soit à votre domicile. Si il s&apos;agit d&apos;une
          réfection de siège, ou une restauration d&apos;abat-jour, il est
          préférable de venir avec l&apos;objet. Mon tarif varie en fonction du
          type de projet et du choix de tissus. Si vous fournissez le tissu, le
          coût de la façon sera majoré et le tissu ne sera pas garanti. Je me
          laisse également la liberté de travailler ou non avec votre tissu si
          je ne le juge pas adapté à votre projet.
        </p>
      </Accordion>
      <Accordion title="Dépôt de l'objet à l'atelier">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Une fois le devis accepté vous pouvez venir déposer votre objet
          directement à l&apos;atelier. Un enlèvement à domicile est
          envisageable mais des frais de déplacement pourront être facturés.
        </p>
      </Accordion>
      <Accordion title="Réalisation">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Si vous le souhaitez, vous disposerez d&apos;un suivi dans les étapes
          de réalisation de votre projet.
        </p>
      </Accordion>
      <Accordion title="Retrait ou livraison">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Vous pouvez venir retirer votre objet une fois restauré directement à
          l&apos;atelier. Une livraison est également envisageable toutefois des
          frais de déplacement seront à envisager.
        </p>
      </Accordion>
      <div>
        <Link href={"/contact"}>
          <button
            className="mt-5 ml-5 relative rounded-full border-2 border-solid border-lune bg-white/0 px-6 py-3 font-bold  text-lune text-[.85rem] transition-all 
                            duration-400 hover:translate-y-[-6px] hover:text-creamy hover:rounded-full hover:bg-lune hover:shadow-[4px_4px_4px_lune] active:translate-x-[0px] 
                            active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          >
            + de questions ?
          </button>
        </Link>
      </div>
    </div>
  )
}

export default StepRestaurer
