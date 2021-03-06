﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.TenisApp
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Game.
    /// </summary>
    // *** Start programmer edit section *** (Game CustomAttributes)

    // *** End programmer edit section *** (Game CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("bpa_GameE", new string[] {
            "Order as \'Order\'",
            "ScoreP1 as \'Score p1\'",
            "ScoreP2 as \'Score p2\'"})]
    [View("GameE", new string[] {
            "ScoreP1",
            "ScoreP2",
            "Order"})]
    public class Game : ICSSoft.STORMNET.DataObject
    {
        
        private int fOrder;
        
        private int fScoreP1;
        
        private int fScoreP2;
        
        private IIS.TenisApp.Match fMatch;
        
        // *** Start programmer edit section *** (Game CustomMembers)

        // *** End programmer edit section *** (Game CustomMembers)

        
        /// <summary>
        /// Order.
        /// </summary>
        // *** Start programmer edit section *** (Game.Order CustomAttributes)

        // *** End programmer edit section *** (Game.Order CustomAttributes)
        public virtual int Order
        {
            get
            {
                // *** Start programmer edit section *** (Game.Order Get start)

                // *** End programmer edit section *** (Game.Order Get start)
                int result = this.fOrder;
                // *** Start programmer edit section *** (Game.Order Get end)

                // *** End programmer edit section *** (Game.Order Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Game.Order Set start)

                // *** End programmer edit section *** (Game.Order Set start)
                this.fOrder = value;
                // *** Start programmer edit section *** (Game.Order Set end)

                // *** End programmer edit section *** (Game.Order Set end)
            }
        }
        
        /// <summary>
        /// ScoreP1.
        /// </summary>
        // *** Start programmer edit section *** (Game.ScoreP1 CustomAttributes)

        // *** End programmer edit section *** (Game.ScoreP1 CustomAttributes)
        public virtual int ScoreP1
        {
            get
            {
                // *** Start programmer edit section *** (Game.ScoreP1 Get start)

                // *** End programmer edit section *** (Game.ScoreP1 Get start)
                int result = this.fScoreP1;
                // *** Start programmer edit section *** (Game.ScoreP1 Get end)

                // *** End programmer edit section *** (Game.ScoreP1 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Game.ScoreP1 Set start)

                // *** End programmer edit section *** (Game.ScoreP1 Set start)
                this.fScoreP1 = value;
                // *** Start programmer edit section *** (Game.ScoreP1 Set end)

                // *** End programmer edit section *** (Game.ScoreP1 Set end)
            }
        }
        
        /// <summary>
        /// ScoreP2.
        /// </summary>
        // *** Start programmer edit section *** (Game.ScoreP2 CustomAttributes)

        // *** End programmer edit section *** (Game.ScoreP2 CustomAttributes)
        public virtual int ScoreP2
        {
            get
            {
                // *** Start programmer edit section *** (Game.ScoreP2 Get start)

                // *** End programmer edit section *** (Game.ScoreP2 Get start)
                int result = this.fScoreP2;
                // *** Start programmer edit section *** (Game.ScoreP2 Get end)

                // *** End programmer edit section *** (Game.ScoreP2 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Game.ScoreP2 Set start)

                // *** End programmer edit section *** (Game.ScoreP2 Set start)
                this.fScoreP2 = value;
                // *** Start programmer edit section *** (Game.ScoreP2 Set end)

                // *** End programmer edit section *** (Game.ScoreP2 Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.TenisApp.Match.
        /// </summary>
        // *** Start programmer edit section *** (Game.Match CustomAttributes)

        // *** End programmer edit section *** (Game.Match CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Match"})]
        public virtual IIS.TenisApp.Match Match
        {
            get
            {
                // *** Start programmer edit section *** (Game.Match Get start)

                // *** End programmer edit section *** (Game.Match Get start)
                IIS.TenisApp.Match result = this.fMatch;
                // *** Start programmer edit section *** (Game.Match Get end)

                // *** End programmer edit section *** (Game.Match Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Game.Match Set start)

                // *** End programmer edit section *** (Game.Match Set start)
                this.fMatch = value;
                // *** Start programmer edit section *** (Game.Match Set end)

                // *** End programmer edit section *** (Game.Match Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "bpa_GameE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View bpa_GameE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("bpa_GameE", typeof(IIS.TenisApp.Game));
                }
            }
            
            /// <summary>
            /// "GameE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View GameE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("GameE", typeof(IIS.TenisApp.Game));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Game.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfGame CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfGame CustomAttributes)
    public class DetailArrayOfGame : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.TenisApp.DetailArrayOfGame members)

        // *** End programmer edit section *** (IIS.TenisApp.DetailArrayOfGame members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Game by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Game.
        /// </summary>
        public DetailArrayOfGame(IIS.TenisApp.Match fMatch) : 
                base(typeof(Game), ((ICSSoft.STORMNET.DataObject)(fMatch)))
        {
        }
        
        public IIS.TenisApp.Game this[int index]
        {
            get
            {
                return ((IIS.TenisApp.Game)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.TenisApp.Game dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
