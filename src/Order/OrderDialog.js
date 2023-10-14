import React from 'react';
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";
import { Translator } from '../I18n'

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
  return openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
      <DialogContent>
        <h2>🚚 <Translator path="orderDialog.ontheway" /></h2>
        <p>
          <Translator path="orderDialog.confirmationemail" />
        </p>
      </DialogContent>
      <DialogFooter>
        <ConfirmButton onClick={() => {
          setOrders([]);
          setOpenOrderDialog();
        } }>
          <Translator path="orderDialog.stillhungry" />
        </ConfirmButton>
      </DialogFooter>
    </Dialog>
  </> : <div/>
}
