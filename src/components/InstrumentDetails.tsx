import React from "react";
import { Instrument } from "@/data/types";
import Image from "next/image";

type Props = {
    instrument: Instrument
}

const InstrumentDetails: React.FC<Props> = ({instrument}) => {

return (
    <div>
        <h3>{instrument.name}</h3>
        <Image src="/instruments/placeholder.jpg" width={250} height={125}  alt={instrument.name}/>
    </div>
)

}

export default InstrumentDetails