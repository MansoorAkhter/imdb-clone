import Image from "next/image";

const loading = () => {
    return <div className="flex justify-center">
        {/* <img className="h-96" src="spinner.svg" alt="loading..." /> */}
        <Image width={384} height={384} src="spinner.svg" alt="loading..." />

    </div>;
};

export default loading;
