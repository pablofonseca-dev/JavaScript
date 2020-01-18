��' u s e   s t r i c t ' ;  
  
 / / S e l e c t o r e s    
  
 / *  
 D i f e r e n c i a s   G e n e r a l e s   e n t r e   l a s   v e r s i o n e s   d e   J Q u e r y   C o r e   1 . x ,   2 . x   y   3 . x  
 V e r s i o n   I :   P o c a   c o m p a t i b i l i d a d   c o n   l o s   n a v e g a d o r e s ,   h a b � a   q u e   m a n t e n e r   c � d i g o   p a r a   h a b i l i d a r   e l   s o p o r t e   c o n    
 l o s   d i f e r e n t e s   t i p o s   d e   n a v e g a d o r e s   w e b .    
  
 V e r s i o n   I I :   J Q u e r y   d e j a   d e   s e r   c o m p a t i b l e   c o n   I n t e r n e t   E x p l o r e s ,   s e   i n c r e m e n t a   l a   o p t i m i z a c i � n   d e l   c � d i g o .    
  
 V e r s i o n   I I I :   J Q u e r y   t r a e   s o p o r t e   p a r a   p r o m e s a s ,   p e t i c i o n e s ,   m e j o r a   m u c h o   p a r a   s e r   c o m p a t i b l e   c o n   l a    
 t e c n o l o g � a   H T M L   e n   s u   v e r s i � n   5 .    
  
  
 * /  
  
 / *  
         E l   s i g n o   d e   d � l a r   o   t a m b i � n   l a   p a l a b r a   J Q u e r y   r e p r e s e n t a   u n   o b j e t o ,   e l   o b j e t o   J Q u e r y  
         L o   q u e   e s t �   e n t r e   p a r � n t e s i s   e s   e l   e l e m e n t o   d e l   s e l e c t o r ,   e n   e s t e   c a s o   s e   s e l e c c i o n a   d o c u m e n t .    
         d o c u m e n t   s i e m p r e   s e   r e f i e r e   a   t o d a   l a   p � g i n a   w e b   e n   g e n e r a l .    
  
         E l   m � t o d o   r e a d y   h a c e   r e f e r e n c i a   a   u n   e v e n t o   q u e   s e   a c c i o n a   u n a   v e z   q u e   e l   d o c u m e n t o   c a r g u e   p o r   c o m p l e t o  
 * /  
  
 $ ( d o c u m e n t ) . r e a d y ( ( )   = >   {  
         c o n s o l e . l o g ( " D O M   L o a d e d " ) ;  
  
         / / S e l e c t o r   d e   I D    
         l e t   c o l o r _ r e d _ p   =   $ ( " # c o l o r _ r e d " ) ;  
         l e t   c o l o r _ g r e e n _ p   =   $ ( " # c o l o r _ g r e e n " ) ;  
         l e t   c o l o r _ y e l l o w _ p   =   $ ( " # c o l o r _ y e l l o w " ) ;  
         c o l o r _ r e d _ p  
                 . c s s ( " b a c k g r o u n d C o l o r " ,   " r e d " )  
                 . c s s ( " c o l o r " ,   " w h i t e " ) ;  
         c o l o r _ g r e e n _ p  
                 . c s s ( " b a c k g r o u n d C o l o r " ,   " g r e e n " )  
                 . c s s ( " c o l o r " ,   " w h i t e " ) ;  
         c o l o r _ y e l l o w _ p  
                 . c s s ( " b a c k g r o u n d C o l o r " ,   " y e l l o w " )  
                 . c s s ( " c o l o r " ,   " g r e e n " ) ;  
         c o n s o l e . l o g ( c o l o r _ r e d _ p ) ;  
  
         / / S e l e c t o r   d e   C l a s e  
         / / E l i j e n   l o s   e l e m e n t o s   d e l   D O M   e n   b a s e   d e   u n a   c l a s e  
         l e t   d o m _ f o n t _ c l a s s   =   $ ( " . r e s i z e " ) ;  
         d o m _ f o n t _ c l a s s . o n ( ' c l i c k ' ,   f u n c t i o n ( )   {  
                 i f   ( $ ( t h i s ) . h a s C l a s s ( " f o n t _ s i z e " )   = =   t r u e )   {  
                         $ ( t h i s ) . r e m o v e C l a s s ( " f o n t _ s i z e " ) ;  
                 }   e l s e   {  
                         $ ( t h i s ) . a d d C l a s s ( " f o n t _ s i z e " ) ;  
                 }  
         } ) ;  
         / / S e l e c t o r   p o r   E t i q u e t a    
         l e t   p a r a g r a p h s   =   $ ( " p " ) ;  
         p a r a g r a p h s . o n ( ' c l i c k ' ,   f u n c t i o n ( )   {  
                 i f   ( $ ( t h i s ) . h a s C l a s s ( " z e b r a " )   = =   t r u e )   {  
                         $ ( t h i s ) . r e m o v e C l a s s ( " z e b r a " ) ;  
                 }   e l s e   {  
                         $ ( t h i s ) . a d d C l a s s ( " z e b r a " ) ;  
                 }  
         } ) ;  
  
         / / S e l e c t o r e s   p o r   a t r i b u t o    
         l e t   g o o g l e _ l i n k   =   $ ( ' [ t i t l e   =   " G o o g l e " ] ' ) ;  
         g o o g l e _ l i n k . c s s ( " b a c k g r o u n d " ,   " r e d " ) ;  
  
         / / S e l e c t o r   f i n d ,   b u s c a   l o s   h i j o s   d e   u n   e l e m e n t o ,   s i n   i m p o r t a r   s u   l o c a l i z a c i � n ,   l o   i m p o r t a n t e   e s   q u e   s e a n   h i j o s  
         / / F i n d   s i r v e   p a r a   b u s c a r   d e n t r o   d e   u n   a r b o l   H T M L   m u y   g r a n d e   e l e m e n t o s   q u e   s o n   h i j o s   d e   o t r o  
         / / q u e   n o   s a b e m o s   e x a c t a m e n t e   d o n d e   e s t a n   d e n t r o   d e   e l .    
         l e t   h i g h l i g h t e d _ e l e m e n t s   =   $ ( ' # b o x ' ) . f i n d ( " . h i g h l i g h t e d " ) ;  
         c o n s o l e . l o g ( h i g h l i g h t e d _ e l e m e n t s ) ;  
  
         / / S e l e c t o r   p a r e n t ,   s i r v e   p a r a   i r   s a l t a n d o   e n   e l   D O M   a   l o s   e l e m e n t o s   p a d r e   a   p a r t i r   d e   u n   e l e m e n t o   h i j o  
         l e t   e l e m e n t _ t h r e e   =   $ ( ' # e l e m e n t _ t h r e e ' ) ;  
         l e t   h i g h l i g h t e d _ e l e m e n t s _ t w o   =   e l e m e n t _ t h r e e . p a r e n t ( ) . p a r e n t ( ) . f i n d ( " . h i g h l i g h t e d " ) ;  
         c o n s o l e . l o g ( h i g h l i g h t e d _ e l e m e n t s _ t w o ) ;  
 } ) ; 
