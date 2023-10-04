import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import { LightButton } from "@/components/atoms/Buttons/LightButton";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/Buttons/SecondaryButton";
import { TextButton } from "@/components/atoms/Buttons/TextButton";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import MenuWrap from "@/components/atoms/MenuWrap";
import PageRow from "@/components/atoms/PageRow";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";

const Beranda = () => {
  return (
    <>
      <PageTransition>
        <PageRow>
          <ContainerQuery>
            <PageBanner></PageBanner>
            <MenuWrap>
              <CardIconShadow
                title="Cuti"
                subtitle="Lihat dan kelola ajuan dan riwayat cuti anda"
                link="/cuti"
                icon="/images/icon/folderbf.svg"
              />
              <CardIconShadow
                title="Menu B"
                subtitle="Menu kedua atau B"
                link="/portofolio"
                icon="/images/icon/porto.svg"
              />
              <CardIconShadow
                title="Menu C"
                subtitle="Menu ketiga atau C"
                link="/skem"
                icon="/images/icon/skem.svg"
              />
              <CardIconShadow
                title="Menu D"
                subtitle="Menu keempat atau D"
                link="/beasiswa"
                icon="/images/icon/beasiswa.svg"
              />
              <CardIconShadow
                title="Menu E"
                subtitle="Menu kelima atau E"
                link="/magang"
                icon="/images/icon/magang.svg"
              />
              <CardIconShadow
                title="Menu F"
                subtitle="Menu keenam atau F"
                link="/wirausaha"
                icon="/images/icon/wira.svg"
              />
            </MenuWrap>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;
