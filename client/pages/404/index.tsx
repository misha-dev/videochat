import { Button } from "@mui/material";
import Link from "next/link";

import cl from "./404.module.scss";

const Page404 = () => {
  return (
    <div className={cl.wrapper}>
      <section className={cl["error-container"]}>
        <span>4</span>
        <span>
          <span className={cl["screen-reader-text"]}>0</span>
        </span>
        <span>4</span>
      </section>
      <Link href={"/"} replace className={cl["more-link"]} passHref>
        <Button
          sx={{
            color: "#973b76",
            fontSize: "1.7rem",
            fontWeight: "600",
            textDecoration: "underline",
          }}
          variant="text"
        >
          go home
        </Button>
      </Link>
    </div>
  );
};

export default Page404;
