import { gql, useLazyQuery } from "@apollo/client";
import Alert from "components/Alert/Alert";
import CircleLoading from "components/Loading/CircleLoading";
import NCMAZ_TRANSLATE from "contains/translate";
import { UserFullData } from "data/types";
import React, { FC, useEffect } from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import EditProfileForm from "./EditProfileForm";
import GeneralForm from "./GeneralForm";
import { GQL_QUERY_FULL_USER_DATA } from "./gqlUpdateUser";
import SocialsProfileForm from "./SocialsProfileForm";

interface Root {
  data: Data;
}

interface Data {
  user: UserFullData;
}

export interface NcmazAccountPageProps {}

type Tabs = "general" | "profile" | "password" | "socials";

const NcmazAccountPage: FC<NcmazAccountPageProps> = () => {
  const [activeTab, setActiveTab] = React.useState<Tabs>("general");

  const Q_GET_CURRENT_USER = gql`
    ${GQL_QUERY_FULL_USER_DATA}
  `;

  const [getCurrentUserByID, { error, data, loading }] = useLazyQuery<Data>(
    Q_GET_CURRENT_USER,
    { notifyOnNetworkStatusChange: true }
  );

  useEffect(() => {
    if (frontendObject.currentUser?.databaseId) {
      getCurrentUserByID({
        variables: { id: Number(frontendObject.currentUser?.databaseId) },
      });
    }
  }, []);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tabParam = urlParams.get("tab");
    const tabsCorrect: Tabs[] = ["general", "profile", "password", "socials"];

    if (!tabParam || !tabsCorrect.includes(tabParam as Tabs)) {
      return;
    }

    setActiveTab((tabParam as Tabs) || "general");
    window.scrollTo(0, 0);
  }, []);

  // ============================================
  if (error) {
    return (
      <Alert type="error">
        <div
          dangerouslySetInnerHTML={{
            __html: `${error.message}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`,
          }}
        ></div>
      </Alert>
    );
  }

  if (loading) {
    return <CircleLoading />;
  }

  if (!data || !data.user) {
    return (
      <Alert type="error">
        <div
          dangerouslySetInnerHTML={{
            __html: ` ${NCMAZ_TRANSLATE["somethingWentWrong"]}
          <a
            class="underline ml-2"
            href="javascript:window.location.href=window.location.href"
          >
            Reload
          </a>`,
          }}
        ></div>
      </Alert>
    );
  }
  // ============================================

  const handleChangeTab = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: Tabs
  ) => {
    e.preventDefault();

    if (tab === activeTab) {
      return;
    }

    setActiveTab(tab);
    window.scrollTo(0, 0);
    window.history.pushState(null, "", `?tab=${tab}`);
  };

  const renderLeftSidebar = () => {
    const tabs: Tabs[] = ["general", "profile", "password", "socials"];
    return (
      <div className="md:sticky md:top-32">
        <ul className="space-y-4 md:space-y-5 md:pr-10">
          {tabs.map((tab) => {
            const active = activeTab === tab;
            return (
              <li key={tab}>
                <a
                  className={`capitalize  ${
                    active
                      ? "text-neutral-900 dark:text-neutral-100 font-semibold"
                      : "text-neutral-500 dark:text-neutral-400"
                  }`}
                  onClick={(e) => handleChangeTab(e, tab)}
                  href={`#${tab}`}
                >
                  {NCMAZ_TRANSLATE[tab]}
                </a>
              </li>
            );
          })}

          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700" />
          <li className="warning">
            <a
              className="text-red-500"
              href={frontendObject.wpLogoutUrl || "#"}
            >
              {NCMAZ_TRANSLATE["Logout Account"]}
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className={`nc-NcmazAccountPage__content `}>
      <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
      <div className="mt-10 flex flex-col md:flex-row">
        <div className="nc-NcmazAccountPage__content-left flex-shrink-0 md:w-1/4">
          {renderLeftSidebar()}
        </div>

        <div className="nc-NcmazAccountPage__content-right flex-grow mt-10 md:mt-0 xl:pl-16 max-w-3xl ">
          {/* ---- */}
          {activeTab === "general" && <GeneralForm userData={data.user} />}
          {activeTab === "profile" && <EditProfileForm userData={data.user} />}
          {activeTab === "password" && (
            <ChangePasswordForm userData={data.user} />
          )}
          {activeTab === "socials" && (
            <SocialsProfileForm userData={data.user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NcmazAccountPage;
