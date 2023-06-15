import { Box } from "@chakra-ui/react";
import PageTransition from "@/components/PageTransitions";
import CardImage from "@/components/molecules/CardImage";

const Komponen = () => {
  const bgLight = "/images/app/komponen/bluebg.png";
  const cover = "/images/app/komponen/bluebgfull.png";
  return (
    <>
      <PageTransition>
        
        <Box
          className="grid grid-cols-12"
          gap="10px"
          pos="relative"
          bg="transparent"
        >
          <CardImage
            title="Button"
            description="Button sebagai wadah fungsi interaktif untuk user."
            contentImage="/images/app/komponen/button.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen/button"
          />
          <CardImage
            title="Badge"
            description="Wadah informasi dinamis dan singkat untuk ditampilkan kepada user."
            contentImage="/images/app/komponen/badge.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Dialog"
            description="Komunikasi dua atau satu arah antar user dan aplikasi."
            contentImage="/images/app/komponen/alert.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
          <CardImage
            title="Card"
            description="Pengelompokan berbagai macam informasi yang berada dalam satu konteks."
            contentImage="/images/app/komponen/card.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/foundations"
          />
          <CardImage
            title="Selector"
            description="Komponen yang memungkinkan user melakukan pilihan."
            contentImage="/images/app/komponen/selector.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/asset"
          />
          <CardImage
            title="Table"
            description="Tampilan informasi yang tersusun dan dinamis untuk memudahkan user memilah."
            contentImage="/images/app/komponen/table.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/komponen/"
          />
          <CardImage
            title="Topbar"
            description="Wadah untuk judul dan fungsi lain yang terhubung pada konten dibawahnya"
            contentImage="/images/app/komponen/topbar.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/style"
          />
          <CardImage
            title="Input Field"
            description="Wadah untuk user menuliskan input dengan ragam bentuk."
            contentImage="/images/app/komponen/inputfield.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/pattern"
          />
          <CardImage
            title="Tab"
            description="Pemisah dua konteks informasi pada halaman yang sama dengan tampilan bergantian."
            contentImage="/images/app/komponen/tabs.png"
            bgImageHover={cover}
            bgImage={bgLight}
            url="/foundations"
          />
        </Box>
      </PageTransition>
    </>
  );
};

export default Komponen;
