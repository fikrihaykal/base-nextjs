import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import { RencanaKerjaRequest } from "@/types/renker";
import { Button, Flex, TableContainer, Text } from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import { mutate } from "swr";
import AktivitasKerjaWidget from "../Widget/AktivitasKerjaWidget";
import PlainCard from "@/components/organisms/Cards/Card";
import InputArea from "@/components/molecules/InputArea";
import { PrimaryButton } from "@/components/atoms/Buttons/PrimaryButton";
import DropdownSelect from "@/components/customs/Select";
import { InfiniteQuery, TableLoadMoreConf } from "@/utils/table";
import { useEffect } from "react";
import {
  TableWrapper,
  TableSorting,
  TableSortingRow,
  TableSortingCol,
  TableFilter,
} from "@/components/molecules/Table";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { DropdownItemYr } from "@/data/dummy";
import { DropdownItem } from "@/types/dropdown-items";
import { table } from "console";
import { kolomTabelAbsen } from "@/data/tableRekap";
import PageCol from "@/components/atoms/PageCol";
import PageRow from "@/components/atoms/PageRow";
import { kolomTabelLibur } from "@/data/tableLibur";

const HariLibur = () => {
  return (
    <PageTransition pageTitle="Manajemen Validator">
      <PageRow>
        <PageCol>
          <PlainCard></PlainCard>
        </PageCol>
      </PageRow>
    </PageTransition>
  );
};
export default HariLibur;
