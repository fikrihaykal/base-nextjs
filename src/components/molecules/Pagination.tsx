import {
    Box,
    IconButton,
    HStack,
    IconButtonProps,
    Text
} from "@chakra-ui/react";
import _ from "lodash";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@chakra-ui/icons";
import {random} from "nanoid";

// Extending Icon Button Props so most of the props will be same as IconButton
interface PaginationProps extends Omit<IconButtonProps, "onChange">{
    count : number;
    defaultPage? : number;
    isRound? : boolean;
    siblingCount? : number;
    boundaryCount? : number;
    hideNextButton? : boolean;
    hidePrevButton? : boolean;
    onChange? : (event: React.MouseEvent<HTMLButtonElement>, page: number) => any;
}

const PageItemEllipse = ({
    key,
   ...rest
}:{
    key?: any;
}) => {
    return <IconButton
        {...rest}
        key={key}
        icon={
            <Text>
                &hellip;
            </Text>
        }
        aria-label="Ellipse"
    />
}

const PaginationItem = ({
    index,
    currentPage,
    onButtonClick,
    centerListIndex,
    centerIndex,
    ...rest
}: {
    index: any;
    currentPage: number;
    onButtonClick: (event: React.MouseEvent<HTMLButtonElement>, page: number) => any;
    centerListIndex: any[];
    centerIndex: number;
}) => {
    // Conditional rendering
    const isCurrentPage = () => currentPage - 1 === index
    const isCurrentPageInCenterList = () => centerListIndex.includes(currentPage - 1)
    const isIndexInCenterList = () => centerListIndex.includes(index)
    const isCenterIndex = () => centerIndex === index


    // Hooks
    const isRender = useMemo(() => {
        if(isCurrentPageInCenterList()){
            if(isCurrentPage()){
                console.log('current page render' + index)
                return true
            }
            if(!isIndexInCenterList()){
                console.log('edge render' + index)
                return true
            }
        }
        if(isIndexInCenterList()){
            console.log('center render ' + index)

            if(isCurrentPageInCenterList()){
                return false
            }
            if(!isCenterIndex() && !isCurrentPage()){
                console.log('center redindeing ' + index)
                return false
            }
            return true
        }
        return true
    }, [currentPage])
    const isEllipse = useMemo(() => index === "nextEllipse" || index === "prevEllipse", [index])


    return (
        <>{isRender
            ? isEllipse
                ? <PageItemEllipse
                    {...rest}
                />
                : <IconButton
                    {...rest}
                    onClick={(e) => onButtonClick(e, index + 1)}
                    isActive={index+1 == currentPage}
                    icon={
                        <Text>
                            {index + 1}
                        </Text>
                    }
                    aria-label={String(index +1)}
                />
            : ''
        }
        </>
    )
}
const Pagination = ({
    count,
    defaultPage = 1,
    siblingCount = 1,
    boundaryCount = 1,
    hideNextButton = false,
    hidePrevButton = false,
    onChange,
    // Button
    ...rest
}: Omit<PaginationProps, "aria-label">) => {
    const [currentPage, setCurrentPage]  = useState<number>(defaultPage)

    //Render list index page
    let centerListIndex: any[] = []
    let centerIndex: number = 0
    let leftListIndex = []
    let rightListIndex = []
    let isNearFirstList = false  // To handle boundary count last/first list pagination
    let isNearEndList = false
    // const isPrevEllipse = useRef(false)
    // const isNextEllipse = useRef(false)

    const isOnChange = (event: React.MouseEvent<HTMLButtonElement>, page: number) => {
        if(onChange)
            return onChange(event, page)
        return
    }
    const onClickNextButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        // setIndexActive(prevState => prevState == count - 1 ? prevState : prevState + 1)
        setCurrentPage(prevState => {
            if(prevState == count){
                isOnChange(event, prevState)
                return prevState
            }
            isOnChange(event,prevState + 1)
            return prevState + 1

        })
    }
    const onClickPrevButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPage(prevState => {
            if(prevState == 1){
                isOnChange(event,prevState )
                return prevState
            }
            isOnChange(event,prevState - 1)
            return prevState - 1
        })
    }

    const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>, page: number) => {
        setCurrentPage(prevState => {
            isOnChange(event, page)
            return page
        })
    }

    // Conditional rendered component
    /*const renderLeftPaginationItems = () => {
        let listIndex: number[] = _.range(count).slice(0, boundaryCount)

        if(currentPage < 3){
            listIndex = _.range(2)
            return (
                <>
                    {listIndex.map(data => PaginationItem({
                        index: data,
                        currentPage: currentPage,
                        onButtonClick: onButtonClick,
                        ...rest
                    }))}
                </>
            )
        }

        if(boundaryCount == 0){
            return PageItemEllipse({...rest})
        }


        return (
            <>
                {listIndex.map(data => PaginationItem({
                    index: data,
                    currentPage: currentPage,
                    onButtonClick: onButtonClick,
                    ...rest
                }))}
                <PageItemEllipse {...rest} />
            </>
        )
    }

    const renderRightPaginationItems = () => {
        let listIndex: number[] = _.range(count).slice(count - boundaryCount, count)

        if(boundaryCount == 0){
            return PageItemEllipse({...rest})

        }

        return (
            <>
                <PageItemEllipse {...rest} />
                {listIndex.map(data => PaginationItem({
                    index: data,
                    currentPage: currentPage,
                    onButtonClick: onButtonClick,
                    ...rest
                }))}
            </>
        )
    }*/

    const renderCenterPaginationItems = () => {
        let listIndex: any[] = _.range(count)

        if(boundaryCount > 0){
            listIndex.splice(boundaryCount, 0, "prevEllipse")
            listIndex.splice((count + 1) - boundaryCount, 0,"nextEllipse") // pluss 1 because before already add "prevEllipse"

            centerListIndex = listIndex.slice(boundaryCount + 1, listIndex.length - (boundaryCount + 1))
        }
        console.log(centerListIndex)
        // find center index
        centerIndex = listIndex[Math.round((listIndex.length -1)/ 2)]
        console.log(currentPage)

        // // If page is last or 1 number before last
        // if(currentPage == count || currentPage == count - 1) {
        //     listIndex = _.range(count).slice(-2)
        //     isPrevEllipse.current = true
        // }
        //
        // // If page is first or 1 number before first
        // else if(currentPage == 1 || currentPage == 2){
        //     listIndex = _.range(count).slice(2)
        //     isNextEllipse.current = true
        // }

        return listIndex.map(data => (
            <PaginationItem
                {...rest}
                key={data}
                centerListIndex={centerListIndex}
                centerIndex={centerIndex}
                index={data}
                currentPage={currentPage}
                onButtonClick={onButtonClick}
            />
        ))
    }

    return (
        <>
            <HStack
                justify="center"
                p={{ base: "12px", md: "24px"}}
                spacing={{ base: "4px", md: "8px"}}
            >
                { hidePrevButton
                    ? ''
                    :<IconButton
                        {...rest}
                        onClick={(e) => onClickPrevButton(e)}
                        isDisabled={currentPage == 1}
                        icon={
                            <ChevronLeftIcon />
                        }
                        aria-label="left"
                    />
                }
                {/*{isPrevEllipse.current ? PageItemEllipse({...rest}) : ''}*/}
                {renderCenterPaginationItems()}
                {/*{isNextEllipse.current ? PageItemEllipse({...rest}) : ''}*/}
                {/*{Array.from(Array(count), (e, index) => {*/}


                {/*    return PaginationItem({*/}
                {/*        index: index,*/}
                {/*        currentPage: currentPage,*/}
                {/*        onButtonClick: onButtonClick,*/}
                {/*        ...rest*/}
                {/*    })*/}
                {/*})}*/}
                {
                    hideNextButton
                    ? ''
                    : <IconButton
                            {...rest}
                            onClick={(e) => onClickNextButton(e)}
                            isDisabled={currentPage == count}
                            icon={
                                <ChevronRightIcon />
                            }
                            aria-label="right"
                        />
                }
            </HStack>
        </>
    )
}

export { Pagination }