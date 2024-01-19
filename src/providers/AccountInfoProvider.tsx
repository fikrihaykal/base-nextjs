import { ReactNode } from 'react'
import { createContext } from 'react'
import { getAuthService } from '@/services/GetAuth'
import useSWRImmutable from 'swr/immutable'
import { fetcherDateNow } from '@/utils/common/Fetcher'
import { AccountInfoType } from '@/types/auth'

const accountInfoContextDefault: AccountInfoType = {}

const AccountInfoContext = createContext<AccountInfoType>(
  accountInfoContextDefault
)

export function AccountInfoProvider({ children }: { children: ReactNode }) {
  const { data: dateNow } = useSWRImmutable('date_now', fetcherDateNow)
  const {
    data: userInfoData,
    error: userInfoDataError,
    isValidating: userInfoDataValidating,
  } = useSWRImmutable('auth', getAuthService, {
    refreshInterval: 60000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return (
    <AccountInfoContext.Provider
      value={{
        name: userInfoData?.name,
        profPicture: userInfoData?.picture
          ? userInfoData.picture + '?update=' + dateNow
          : undefined,
        prefUsername: userInfoData?.preferred_username,
        role: userInfoData?.role,
        activeRole: userInfoData?.active_role,
        email: userInfoData?.email,
        birthdate: userInfoData?.birthdate,
        nickname: userInfoData?.nickname,
        userInfoError: userInfoDataError,
        userInfoValidating: userInfoDataValidating,
      }}
    >
      {children}
    </AccountInfoContext.Provider>
  )
}

export default AccountInfoContext
