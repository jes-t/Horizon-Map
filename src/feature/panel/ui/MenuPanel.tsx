/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import styles from './MenuPanel.module.scss';

interface PanelMenuProps {
  markers: any;
  setIsVisibleMarker: (v: boolean) => void;
  isVisibleMarker: boolean;
}

export function PanelMenu({
    markers,
    setIsVisibleMarker,
    isVisibleMarker,
}: PanelMenuProps) {
    const [isVisibleSideBar, setIsVisibleSideBar] = useState(true);
    console.log(markers);

    const count = markers.length;

    return (
        <>
            {/* <div
        onClick={() => {
          setIsVisibleSideBar(!isVisibleSideBar);
        }}
        className={styles.arrow}
      >
        {"<"}
      </div> */}
            <div className={styles.sidebar}>
                {isVisibleSideBar && (
                    <div className={styles.panel}>
                        <h2>Horizon Zero Dawn Interactive Map</h2>
                        <div className={styles.wrapper}>
                            <span>Categories</span>
                            <ul className={styles.categories}>
                                <div className={styles.group}>Location</div>
                                <div
                                    className={styles.subcategories}
                                    onClick={() => setIsVisibleMarker(!isVisibleMarker)}
                                >
                                    Campfire -
                                    {count}
                                </div>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
